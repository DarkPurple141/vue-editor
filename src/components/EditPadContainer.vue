<template lang="html">
   <div class="texteditor-frame">
      <EditorSidebar :rows="rows"/>
      <EditorTextarea :file="file" :rows="rows"/>
   </div>
</template>

<script>
import { EditorTextarea, EditorSidebar } from '@/components'

export default {
   props: {
      file: String
   },
   components: { EditorSidebar, EditorTextarea },
   computed: {
      rows() {
         return this.file.split('\n').length
      }
   }
}
</script>

<style lang="less" scoped>
.texteditor-frame {
   // prevent scrolling of whole window
   height: calc(100vh - 60px);
   overflow-y: scroll;
   display: flex;
   flex-direction: row;
   width: 100%;
}

@media screen and (orientation: portrait) {
   .texteditor-frame {
      overflow-y: scroll;
      max-height: calc(60vh - 60px);
   }
}

</style>
