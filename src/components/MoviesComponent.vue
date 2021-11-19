<template>
  <div class="row">
    <div class="title_sec"><h2>Movies</h2></div>
    <div v-for="movie in movies" :key="movie.id" class="col-3">
      <div class="movie">
        <div class="movie_img_wrapper">
          <img
            :src="'https://image.tmdb.org/t/p/' + 'w342' + movie.poster_path"
            alt=""
            v-if="movie.poster_path !== null"
          />
          <img
            :src="'https://image.tmdb.org/t/p/' + 'w342' + movie.backdrop_path"
            alt=""
            v-else-if="
              movie.poster_path === null && movie.backdrop_path !== null
            "
          />
          <img
            src="http://www.cfpcemon.it/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
            class="not_found_img"
            alt=""
            v-else
          />
        </div>
        <div class="movie_info">
          <div class="movie_info_content">
          <p>title: <span class="info_text">{{ movie.title }}</span></p>
          <p>original title: <span class="info_text">{{ movie.original_title }}</span></p>
          <div class="language d-flex align-items-center">
            <p>language:</p>
            <country-flag
              :country="movie.original_language"
              size="normal"
              v-if="movie.original_language !== 'en'"
            />
            <country-flag
              country="gb"
              size="normal"
              v-else-if="movie.original_language === 'en'"
            />
          </div>
          
          <div class="d-flex align-items-center">
            <p>vote:</p>
            <i class="fas fa-star" v-for="i in transformNumber(movie.vote_average)" :key="i"></i>
            <i class="far fa-star" v-for="i in (5 - transformNumber(movie.vote_average))" :key="i"></i>

          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: Array,
  },
  methods: {
    transformNumber(number) {
      return Math.floor(number / 2);
    },
  },
};
</script>

<style lang="scss">
.movie_img_wrapper {
  width: 100%;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
      object-position: bottom;
  }
}
.movie{
  position: relative;
  transition: all 250ms;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(167, 159, 159, 0.507);
}

.movie_info{
  transition: all 250ms;
  display: none;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom:0;
  background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.822) 70%);
  color: white;
  p{
    margin: 0;
    font-size: .85rem;
    font-weight: 200;
    
    .info_text{
      font-weight: 700;
      letter-spacing: .5px;
      margin-left: .2rem;
      max-width: 100px;
    }
  }
}
.movie:hover .movie_info{
  display: block;
  
}
.movie_info_content{
  position: absolute;
  width: 100%;
  bottom: 2rem;
  left: 1rem;
}
.title_sec{
  color: white;
  letter-spacing: 1px;
}

</style>