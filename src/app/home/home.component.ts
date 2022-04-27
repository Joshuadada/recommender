import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getTheatreMovies()
    this.getPopularMovies()
  }

  getTrendingMovies(){
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies: any) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }
  getTheatreMovies(){
    this.http
    .get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies: any) => {
      this.theatreMovies = movies;
      console.log(this.trendingMovies);
    });
  }
  getPopularMovies(){
    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies: any) => {
      this.popularMovies = movies;
      console.log(this.trendingMovies);
    });
  }
  goToMovie(type: string, id: string){
    this.router.navigate(['movie', type, id]);
  }
}
