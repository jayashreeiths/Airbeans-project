<template>
  <div>
      <h1>Menu</h1>
      <div v-for ="m in menu" :key=m.id  class="bookstyle">
          <h2>
              {{m.name}}
          </h2>
          <h3>
              {{m.cost}}
          </h3>
          <h3>
              {{m.Brew}}
          </h3>
<button> + </button>
      
      </div>
     </div>

</template>

<script>

export default {
    computed:{
        menu()
        {
            return this.$store.getters.menu;
       
    }
  
}}
</script>