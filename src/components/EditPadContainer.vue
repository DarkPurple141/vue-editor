<template lang="html">
   <div class="texteditor-frame">
      <EditorSidebar :rows="rows"/>
      <EditorTextarea :rows="rows"/>
   </div>
</template>

<script>
import EditorTextarea from './EditorTextarea'
import EditorSidebar from './EditorSidebar'

export default {
   components: { EditorSidebar, EditorTextarea },
   data() {
      return {
         rows: 20
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
</style>
