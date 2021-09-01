import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from './movies.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesApiUrl = "api/movies";

  constructor(private loggingService:LoggingService, private http:HttpClient) {

   }

  getMovies() : Observable<Movie[]>{
    this.loggingService.add("MovieService is sending movies.");
    return this.http.get<Movie[]>(this.moviesApiUrl);
  }


  getTheMovie(id : number): Observable<Movie>{
    this.loggingService.add("MovieService is sending details by id: "+id);
    return this.http.get<Movie>(this.moviesApiUrl+"/"+id);
  }


  update(movie : Movie):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({"Content-type" : "application/json"})
    }
    this.loggingService.add("MovieService is updating details of the movie : id: "+movie.id+", name: "+movie.name);
    return this.http.put(this.moviesApiUrl,movie,httpOptions);
  }

  add(movie:Movie):Observable<Movie>{
    this.loggingService.add("MovieService is adding the new movie. name: "+movie.name);
    return this.http.post<Movie>(this.moviesApiUrl,movie);
  }

  delete(id:number):Observable<Movie>{
    this.loggingService.add("MovieService is deleting the movie. id: "+id);
    return this.http.delete<Movie>(this.moviesApiUrl+"/"+id);
  }
}
