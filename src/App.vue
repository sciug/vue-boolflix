<template>
  <div id="app">
    <input type="text" v-model="querySearch" placeholder="search a movie">
    <button @click="searchMovie">search</button>
    <div v-for="movie in movies" :key="movie.id">
      <div class="movie">
      <p>title: {{movie.title}}</p>
      <p>original title: {{movie.original_title}}</p>
     <CountryFlag :country='movie.original_language' size='small'/>
      <p>vote: {{movie.vote_average}}</p>

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
      querySearch:"",
      error: "",
      
    }
  },
  methods:{
    callApi(){
      axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=31604f6ab3ca5fcc65adf409f092f7c1&language=en-US&query="+this.querySearch+"&page=1&include_adult=false")
      .then((response)=> {
        console.log(response.data.results)
        this.movies = response.data.results
      })
      .catch((e) => {
          console.log(e, "oops error");
          this.error = e;
        });
    },
    searchMovie(){
      this.callApi()
      console.log(this.Api_url)
    }

    
  }

};
</script>

<style lang="scss">
.movie{
  border: 1px solid red;
  margin:1rem 0rem;
}
</style>
