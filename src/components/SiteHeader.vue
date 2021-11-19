<template>
  <div class="header">
    <div class="header_wrapper d-flex align-items-center">

      <div class="logo_wrapper">
      <img src="../assets/img/boolflix.svg" alt="">
    </div>

    <nav class="header_nav">
      <ul class="nav_list d-flex">
        <li>home</li>
        <li>Serie tv</li>
        <li>film</li>
        <li>Nuovi e popolari</li>
        <li>guarda di nuovo</li>
      </ul>
    </nav>
    <div class="search_bar_wrapper">
    <input type="text" v-model="querySearch" placeholder="search a movie or a series" class="search_bar">
    <button @click="$emit('search', querySearch)" class="search_button"> <i class="fas fa-search"></i> </button> 
    </div>
    <div class="user_info d-flex align-items-center">
      <i class="fas fa-bell"></i>
      <div class="user_img_wrapper">
        <img src="../assets/img/profilePic.png" alt="profile.pic">
      </div>
    </div>
   

    </div>
    
    

  </div>
</template>

<script>
export default {
  data(){
    return {
      querySearch:""
    }
  }

}
</script>

<style lang="scss">
.header{
  background-color:#141414 ;
  width: 100%;
  padding:.5rem 0
}
.header_wrapper{
  width: 90%;
  margin: 0 auto;
}
.logo_wrapper{
  width:10%;
  padding: 1rem;
}
.header_nav{
  width: 50%;
}
.nav_list{
  list-style: none;
  margin: 0;
  li{
    color: white;
    padding: 0 .5rem;
    font-size: .9rem;
  }
}
.search_bar_wrapper{
  width: 20%;
  margin-left: auto;
}
.search_bar,
.search_button{
  border: none;
  padding: .3rem 1rem;
  background-color: #141414;
  border-radius: 25px;
  color:white;
   font-size: .8rem;
   border:2px solid white;
   

}

.search_bar:focus-visible,
.search_button:focus-visible{
  outline: none;
}
.search_bar{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  letter-spacing: 1px;
  border-right: none;
  width:70%
 
}
.search_button{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -1px;
  border-left: none;
}
.user_info{
  width: 10%;
  justify-content: space-evenly;
}
.user_img_wrapper{
  width: 40px;
  height: 40px;
  border-radius: 15px;
  img{
    width: 100%;
     border-radius: 5px;
  }
}
.fa-bell{
  color: white;
  font-size: 1.7rem;
  transform: rotate(-25deg);
}
</style>