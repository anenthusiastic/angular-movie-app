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
  selectedMovie : Movie;

  constructor(private movieService:MovieService, private loggingService : LoggingService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies=> {this.movies = movies})
  }

  onSelect(movie:Movie): void{
    this.selectedMovie = movie;
    this.loggingService.add(movie.name+" selected")
  }

}
