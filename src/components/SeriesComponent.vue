<template>
  <div class="row">
    <div class="title_sec"><h2>Series</h2></div>
    <div v-for="serie in series" :key="serie.id" class="col-3">
      <div class="serie">
        <div class="serie_img_wrapper">
          <img
            :src="'https://image.tmdb.org/t/p/' + 'w342' + serie.poster_path"
            alt=""
            v-if="serie.poster_path !== null"
          />
          <img
            :src="'https://image.tmdb.org/t/p/' + 'w342' + serie.backdrop_path"
            alt=""
            v-else-if="
              serie.poster_path === null && serie.backdrop_path !== null
            "
          />
          <img
            src="http://www.cfpcemon.it/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
            class="not_found_img"
            alt=""
            v-else
          />
        </div>
        <div class="serie_info">
          <div class="serie_info_content">
          <p>title: <span class="info_text">{{ serie.name }}</span></p>
          <p>original title: <span class="info_text">{{ serie.original_name }}</span></p>
          <div class="language d-flex align-items-center">
            <p>language:</p>
            <country-flag
              :country="serie.original_language"
              size="normal"
              v-if="serie.original_language !== 'en'"
            />
            <country-flag
              country="gb"
              size="normal"
              v-else-if="serie.original_language === 'en'"
            />
          </div>
          
          <div class="d-flex align-items-center">
            <p>vote:</p>
            <div v-for="starserie in transformNumber(serie.vote_average)" :key="starserie">
               <i class="fas fa-star" ></i>
            </div>
            <div v-for="seriestarempty in (5 - transformNumber(serie.vote_average))" :key="seriestarempty+'a'">
               <i class="far fa-star" ></i>
            </div>
            <!-- <i class="far fa-star" v-for="starempty in (5 - transformNumber(serie.vote_average))" :key="starempty+'b'"></i>  -->
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
    series: Array,
  },
  methods: {
    transformNumber(number) {
      return Math.floor(number / 2);
    },
  },
};
</script>

<style lang="scss">
.serie_img_wrapper {
  width: 100%;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
      object-position: bottom;
  }
}
.serie{
  position: relative;
  transition: all 250ms;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(167, 159, 159, 0.507);
}

.serie_info{
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
    }
  }
}
.serie:hover .serie_info{
  display: block;
  
}
.serie_info_content{
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