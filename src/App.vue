<template>
  <div id="app">
     <!-- <router-view/> -->
    <Editor/>
  </div>
</template>

<script type="text/javascript">
import Editor from '@/pages/Editor'

export default {
   components: {
      Editor
   }
}

</script>

<style lang="less">

* {
   margin: 0;
   padding: 0;
}

input, textarea, select, button, option {
   font-family: inherit;
}

#app {
  font-size: 16px;
  line-height: 1.5;
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #36454F;
}


</style>
