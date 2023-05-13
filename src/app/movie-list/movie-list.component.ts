import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  searchKeyList = new FormControl('');
  selectedRatingList = new FormControl('');
  selectedCategoryList = new FormControl('');
  categoryList: string[] = ['Action', 'Comedy', 'Thriller', 'Drama'];

  movieList: any[] = []
  baseMovieList: any[] = [
    {
      title: "The Matrix",
      rating: 7.5,
      category: "Action"
    }, {
      title: "Focus",
      rating: 6.9,
      category: "Comedy"
    }, {
      title: "The Lazarus Effect",
      rating: 6.4,
      category: "Thriller"
    }, {
      title: "Everly",
      rating: 5.0,
      category: "Action"
    }, {
      title: "Maps to the Stars",
      rating: 7.5,
      category: "Drama"
    },
  ]

  constructor() {
    this.movieList = [...this.baseMovieList]
  }

  leastOfStar(length: number): any[] {
    return new Array(length)
  }

  numberOfStar(rating: number, type: string): number {
    let numberOfStar = 0
    switch (type) {
      case "fill":
        numberOfStar = Math.floor(rating)
        break
      case "half":
        numberOfStar = (rating - Math.floor(rating) > 0.0) ? 1 : 0
        break
      case "blank":
        let temp = (rating - Math.floor(rating)) > 0.0 ? 0 : 1
        numberOfStar = 9 - Math.floor(rating) + temp
        break
    }
    return numberOfStar
  }

  filter() {
    this.movieList = [...this.baseMovieList.filter((movie): boolean => {
      let searchKeyMatch = false
      let ratingMatch = false
      let categoryMatch = false
      if (this.searchKeyList && this.searchKeyList.value) {
        let searchKeyList = this.searchKeyList.value.split(" ")
        if(this.searchKeyList.value == '')
          searchKeyMatch = true
        else 
          searchKeyList.forEach((value) => {
            if (value != null && value != '')
              searchKeyMatch = movie.title.toLowerCase().includes(value.toLowerCase()) ? true : searchKeyMatch
          })
      } else {
        searchKeyMatch = true
      }

      if (this.selectedRatingList && this.selectedRatingList.value && Array.isArray(this.selectedRatingList.value) && this.selectedRatingList.value.length > 0) {
        if(this.selectedRatingList.value.find(rating => rating == "Any Rating")) {
          ratingMatch = true
        } else {
          ratingMatch = this.selectedRatingList.value.map(rating => {
            return parseInt(rating.replace(" star", ''))
          }).includes(Math.floor(movie.rating)) ? true : ratingMatch
        }
      } else {
        ratingMatch = true
      }

      if (this.selectedCategoryList && this.selectedCategoryList.value && Array.isArray(this.selectedCategoryList.value) && this.selectedCategoryList.value.length > 0) {
        if(this.selectedCategoryList.value.find(rating => rating == "Any Category")) {
          categoryMatch = true
        } else {
          categoryMatch = this.selectedCategoryList.value.includes(movie.category) ? true : categoryMatch
        }
      } else {
        categoryMatch = true
      }

      return searchKeyMatch && ratingMatch && categoryMatch
    })]
  }
}
