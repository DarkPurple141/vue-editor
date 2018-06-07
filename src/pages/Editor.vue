<template>
  <main id="editor">
     <EditorWindow :file="file"/>
  </main>
</template>

<script>
import EditorWindow from '@/components/EditorWindow'

export default {
  name: 'Editor',
  components: {
     EditorWindow
  },
  computed: {
     file() {
        return this.$store.state.file
     }
  }
}
</script>

<style media="screen" lang='less'>
#editor {
   display: flex;
   flex-direction: row;
   min-height: 100vh;
}
</style>
