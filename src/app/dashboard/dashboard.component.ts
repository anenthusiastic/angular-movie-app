import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies : Movie[]
  moviesLength : number
  constructor(private movieService:MovieService, private loggingService:LoggingService) {

   }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies=>{this.movies = movies;
                                                    this.moviesLength = movies.length;});
    this.loggingService.add("Movies were retrieved from movieservice");
  }

}
