<template lang="html">
   <div class="render">
      <div class="plain"
      v-if="plain">{{ file.content }}</div>
      <div v-else>
         <div v-html="language">
         </div>
      </div>
   </div>
</template>

<script>
import marked from 'marked'
import { is_plain } from '@/helpers'
import highlightjs from 'highlightjs'

marked.setOptions({
   highlight: function(code) {
    return highlightjs.highlightAuto(code).value;
  }
})

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
      },
      language() {
         return marked(
            `\`\`\`${this.file.ftype}\n${this.file.content}\n\`\`\``
         )
      },
      plain() {
         return is_plain(this.$store.getters.ftype)
      }
   },
   methods: {
      is_plain
   }
}
</script>

<style lang="css" scoped>

.plain {
   tab-size: 4;
}

.render {
   text-align: left;
   cursor: text;
   font-size: inherit;
   user-select: text;
   pointer-events: none;
}


</style>
