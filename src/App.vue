<template>
  <div id="app">
    <SiteHeader @search="searchElement" />
    <!-- <input type="text" v-model="querySearch" placeholder="search a movie or a series">
    <button @click="searchElement"><i class="fas fa-search"></i></button> -->
    <div class="container">
      <MoviesComponent
        :movies="this.movies"
        class="margin_top"
        @show-actors="showActors"
        :actors="this.actors"
       
      />
      <SeriesComponent :series="this.series" class="margin_top" />
    </div>

    <!-- <div v-for="movie in movies" :key="movie.id">
      <div class="movie">
        <img :src='"https://image.tmdb.org/t/p/"+"w342"+ movie.poster_path'  alt="" v-if="movie.poster_path !== null">
        <img :src='"https://image.tmdb.org/t/p/"+"w342"+ movie.backdrop_path'  alt="" v-else-if="movie.poster_path === null && movie.backdrop_path !==null">
        <img src="http://www.cfpcemon.it/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" class="not_found_img"  alt="" v-else>
      <p>title: {{movie.title}}</p>
      <p>original title: {{movie.original_title}}</p>
      <div class="language">
        <p>language</p> 
      <country-flag :country='movie.original_language' size='normal' v-if='movie.original_language !== "en"'/>
      <country-flag country='gb' size='normal' v-else-if='movie.original_language === "en"'/>


      </div>
      <p>vote: {{transformNumber(movie.vote_average)}}</p>
      <div v-for="i in transformNumber(movie.vote_average)" :key="i">
        <i class="fas fa-star"></i>
      </div>
      <p><i class="fas fa-adjust"></i></p>

      </div>
  



    </div> -->
    <!-- <div v-for="serie in series" :key="serie.id">
          <div class="serie">
        <img :src='"https://image.tmdb.org/t/p/"+"w342"+ serie.poster_path'  alt="" v-if="serie.poster_path !== null">
        <img :src='"https://image.tmdb.org/t/p/"+"w342"+ serie.backdrop_path'  alt="" v-else-if="serie.poster_path === null && serie.backdrop_path !==null">
        <img src="http://www.cfpcemon.it/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" width="342px" alt="" v-else>
      <p>title: {{serie.name}}</p>
      <p>original title: {{serie.original_name}}</p>
      <div class="language">
        <p>language</p> 
      <country-flag :country='serie.original_language' size='normal' v-if='serie.original_language !== "en"'/>
      <country-flag country='gb' size='normal' v-else-if='serie.original_language === "en"'/>


      </div>
      <p>vote: {{transformNumber(serie.vote_average)}}</p>
      <div v-for="i in transformNumber(serie.vote_average)" :key="i">
        <i class="fas fa-star"></i>
      </div>

      </div>

    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import MoviesComponent from "./components/MoviesComponent.vue";
import SeriesComponent from "./components/SeriesComponent.vue";
import SiteHeader from "./components/SiteHeader.vue";

export default {
  name: "App",
  components: {
    MoviesComponent,
    SeriesComponent,
    SiteHeader,
  },
  data() {
    return {
      id: "",      
      movies: [],
      series: [],
      error: "",
      actors:null
    };
  },
  methods: {
    showActors(id) {
      
      

       
          axios
            .get(
              "https://api.themoviedb.org/3/movie/" +
                id +
                "/credits?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US"
            )
            .then((resp) => {
              
              
              /*   this.$set(this.actors,0, resp.data.cast) */
             this.actors = resp.data.cast.slice(0,5);
             
            })
            .catch((e) => {
              console.log(e);
              this.error = e;
            });
       
     ;


      /* this.movies.forEach((movie)=>{
        this.id == movie.id
        console.log("movie id" + this.id)

        
      }) */
    },

    callMovieApi(querySearch) {
      return axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&query=" +
          querySearch
      );
    },
    callSeriesApi(querySearch) {
      return axios.get(
        "https://api.themoviedb.org/3/search/tv?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&page=1&query=" +
          querySearch
      );
    },

    searchElement(querySearch) {
      Promise.all([
        this.callMovieApi(querySearch),
        this.callSeriesApi(querySearch),
      ])
        .then(
          axios.spread((...results) => {
            this.movies = results[0].data.results;
            this.series = results[1].data.results;
          })
        )
        .catch((e) => {
          console.log(this.movies);
          this.error = e;
          console.log(e, "oops error");
        });
    },
    transformNumber(number) {
      return Math.floor(number / 2);
    },
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}
.movie {
  margin: 1rem 0rem;
  border-radius: 5px;
}
.serie {
  margin: 1rem 0rem;
}
.not_found_img {
  height: 513px;
  width: 342px;
  object-fit: cover;
}
body {
  background-color: rgb(20, 20, 20);
}
.margin_top {
  margin-top: 5rem;
}
</style>
