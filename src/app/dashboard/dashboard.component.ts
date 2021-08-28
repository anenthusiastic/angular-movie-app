import { Component, OnInit } from '@angular/core';
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
  constructor(private movieService:MovieService) {

   }

  ngOnInit(): void {
    this.movieService.get5movies(1).subscribe(movies=>{this.movies = movies});
    this.moviesLength = this.movieService.getMoviesLength();
  }

}
