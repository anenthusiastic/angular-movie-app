import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Movie List";
  movies : Movie[];

  constructor(private movieService:MovieService, private loggingService : LoggingService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies=> {this.movies = movies});
    this.loggingService.add("Movies were retrieved from movieservice");
  }


  addMovie(name:string,imageUrl:string,description:string):void{
    this.movieService.add({name,imageUrl,description} as Movie).subscribe(movie =>{
                                this.movies.push(movie);
                                this.loggingService.add("New movie added.  id : "+movie.id+" , name : "+movie.name)
                              })
  }
  deleteTheMovie(id:number):void{
    this.movies = this.movies.filter(m=>id!==m.id);
    this.movieService.delete(id).subscribe();

  }

}
