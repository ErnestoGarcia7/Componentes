<template>

      <div>

  <b-navbar type="dark" variant="dark">

    <b-navbar-nav>

      <b-nav-item to ="/">Home</b-nav-item>

      <b-nav-item to ="/about">About</b-nav-item>

      <b-nav-item to ="/nuevo">Nuevo</b-nav-item>
      
      <b-nav-item to ="/masa">Masa</b-nav-item>

      <b-nav-item to ="/almacenamiento">Almacenamiento</b-nav-item>      

      <b-nav-item to ="/longitud">Longitud</b-nav-item>

      <b-nav-item to ="/moneda">Moneda</b-nav-item>

      <b-nav-item to ="/tiempo">Tiempo</b-nav-item>

    </b-navbar-nav>

  </b-navbar>

    <router-view/>

    </div>

</template>

<script>



export default{

    // eslint-disable-next-line vue/multi-word-component-names
    name:'Navigation'

       

    }

</script>