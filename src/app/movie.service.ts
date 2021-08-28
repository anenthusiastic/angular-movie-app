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
}
