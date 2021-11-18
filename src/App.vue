<template>
  <div id="app">
    <input type="text" v-model="querySearch" placeholder="search a movie or a series">
    <button @click="searchElement"><i class="fas fa-search"></i></button>
    <div v-for="movie in movies" :key="movie.id">
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
  



    </div>
    <div v-for="serie in series" :key="serie.id">
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

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      movies:[],
      series:[],
      querySearch:"",
      error: "",
      
      
      
    }
  },
  methods:{
    callMovieApi(){
    return axios.get("https://api.themoviedb.org/3/search/movie?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&query="+this.querySearch)
    },
    callSeriesApi(){
     return axios.get("https://api.themoviedb.org/3/search/tv?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&page=1&query="+this.querySearch)
    },

    searchElement(){
       Promise.all([this.callMovieApi(), this.callSeriesApi()])
      .then(axios.spread((...results)=>{
        this.movies = results[0].data.results
        this.series = results[1].data.results
      }))
      .catch((e) => {
        console.log(this.movies)
         this.error = e;
          console.log(e, "oops error");
         
        });
    },
    transformNumber(number){
      return Math.floor(number / 2)
    }


    
  },
  

};
</script>

<style lang="scss">
.movie{
  border: 1px solid red;
  margin:1rem 0rem;
}
.serie{
    border: 1px solid blue;
  margin:1rem 0rem;
}
.not_found_img{
  height:513px;
  width:342px;
  object-fit:cover;

}
</style>
