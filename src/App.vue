<template>
  <div id="app">
    <input type="text" v-model="querySearch" placeholder="search a movie or a series">
    <button @click="searchElement">search</button>
    <div v-for="element in elements" :key="element.id">
      <div class="element">
        <img :src='"https://image.tmdb.org/t/p/"+"w342"+ element.poster_path'  alt="" v-if="element.poster_path !== null">
        <img :src='"https://image.tmdb.org/t/p/"+"w342"+ element.backdrop_path'  alt="" v-else-if="element.poster_path === null && element.backdrop_path !==null">
        <img src="http://www.cfpcemon.it/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" width="342px" alt="" v-else>
      <p>title: {{element.title}}{{element.name}}</p>
      <p>original title: {{element.original_title}}{{element.original_name}}</p>
      <div class="language">
        <p>language</p> 
      <country-flag :country='element.original_language' size='normal' v-if='element.original_language !== "en"'/>
      <country-flag country='gb' size='normal' v-else-if='element.original_language === "en"'/>


      </div>
      <p>vote: {{element.vote_average}}</p>

      </div>
  



    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      elements:[],
      querySearch:"",
      error: "",
      
      
    }
  },
  methods:{
    callMovieApi(){
      axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&query="+this.querySearch)
      .then((response)=> {
        console.log(response.data.results)
        this.elements = response.data.results
      })
      .catch((e) => {
          console.log(e, "oops error");
          this.error = e;
        });
    },
    callSeriesApi(){
      axios
      .get("https://api.themoviedb.org/3/search/tv?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&page=1&query="+this.querySearch)
      .then((response)=> {
        console.log(response.data.results)
        this.elements = response.data.results
      })
      .catch((e) => {
          console.log(e, "oops error");
          this.error = e;
        });
    },
    searchElement(){
      this.callSeriesApi()
      this.callMovieApi()
      console.log(this.baseUrlImg)
      
    }

    
  }

};
</script>

<style lang="scss">
.element{
  border: 1px solid red;
  margin:1rem 0rem;
}
</style>
