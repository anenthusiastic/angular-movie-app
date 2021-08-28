import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Movies } from './movie.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private loggingService:LoggingService) {

   }

  getMovies() : Observable<Movie[]>{
    this.loggingService.add("Movies are retrieving")
    return of(Movies);
  }

  get5movies(which:number): Observable<Movie[]>{
    return of(Movies.slice((which-1)*5,(which)*5));
  }

  getTheMovie(id : number): Observable<Movie>{
    this.loggingService.add("MovieService get details by id: "+id);
    return of(Movies.find(movie=>movie.id === id));
  }

  getMoviesLength():number{
    return Movies.length
  }
}
