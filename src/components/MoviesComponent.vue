<template>
  <div class="row">
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
          <p>title: {{ movie.title }}</p>
          <p>original title: {{ movie.original_title }}</p>
          <div class="language d-flex align-items-center">
            <p>language</p>
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
            vote:
            <i class="fas fa-star" v-for="i in transformNumber(movie.vote_average)" :key="i"></i>
            <i class="far fa-star" v-for="i in (5 - transformNumber(movie.vote_average))" :key="i"></i>

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
  }
}
.movie{
  position: relative;
}
.movie_info{
  width: 100%;
  padding: 1rem;
  position: absolute;
  bottom:0;
  left: 0;
  background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9391106784510679) 37%);
  color: white;
  p{
    margin: 0;
  }
}
</style>