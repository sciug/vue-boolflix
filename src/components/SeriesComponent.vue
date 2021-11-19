<template>
  <div class="row">
      <div v-for="serie in series" :key="serie.id" class="col-4">
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
export default {
  props:{
    series: Array,
    
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