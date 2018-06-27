<template lang="html">
   <div class="texteditor-frame">
      <EditorSidebar :rows="rows"/>
      <EditorTextarea :file="file" :rows="rows"/>
   </div>
</template>

<script>
import EditorTextarea from './EditorTextarea'
import EditorSidebar from './EditorSidebar'

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
