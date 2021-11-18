<template>
  <div>
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
  </div>
</template>

<script>
export default {
  props:{
    movies: Array,
    
  },
  methods:{
     transformNumber(number){
      return Math.floor(number / 2)
    }
  }

}
</script>

<style>

</style>