<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg: ""
    }
  },
  sockets: {
    connect(){
      this.msg = "Socket connected";
    },
    ALL(data){
      this.msg = data;
    }
  },
  mounted(){
    
  }
}
</script>

<style>

</style>
