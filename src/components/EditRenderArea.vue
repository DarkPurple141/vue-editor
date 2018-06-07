<template lang="html">
   <div class="render">
      <div v-if="file.ftype == 'md'" v-html="markdown">
      </div>
   </div>
</template>

<script>
import marked from 'marked'

export default {
   props: {
      file: {
         ftype: String,
         content: String
      }
   },
   computed: {
      markdown() {
         return marked(this.file.content)
      }
   }
}
</script>

<style lang="css" scoped>

.render {
   text-align: left;
   padding: 10px;
}

</style>
