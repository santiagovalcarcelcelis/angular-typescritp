import { Component, OnInit } from '@angular/core';
import { IMovie, IResultMovie } from './movies/interfaces/interface';
import { Movie } from './movies/services/movie.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'my-first-project';
  // movies:IMovie[]=[];
  // constructor(){
  // }
  // ngOnInit(): void {
  //   this.getViewMovies()
  // }

  // async getViewMovies() {
  //   const Allmovies = new Movie() 
  //     await Allmovies.getAll().then((res:IResultMovie)=>{
  //       this.movies = res.results
  //     }).catch(console.log)
  // }

 
}
