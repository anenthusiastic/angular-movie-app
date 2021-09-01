import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie : Movie;
  constructor(private movieService : MovieService,
              private route:ActivatedRoute,
              private location:Location,
              private loggingService:LoggingService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.movieService.getTheMovie(id)
                      .subscribe(movie=>{this.movie = movie});
    this.loggingService.add("Details of the movie were retrieved by id from MovieService. Movie id : "+id);
  }

  saveChanges(){
    this.movieService.update(this.movie).subscribe(()=>{this.location.back()})
  }


}
