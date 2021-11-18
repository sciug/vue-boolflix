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

    </div>
    
    

  </div>
</template>

<script>
export default {

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
  width:120px;
  padding: 1rem;
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

</style>