<template lang="html">
   <div class="console">
      {{ script }}
   </div>
</template>

<script>
export default {
   computed: {
      script() {
         return this.$store.state.file.output || "Script output will appear here."
      }
   }
}
</script>

<style lang="css">

.console {
   padding: 5px;
   text-align: left;
}
</style>
