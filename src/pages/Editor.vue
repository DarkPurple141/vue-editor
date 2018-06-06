<template>
  <main id="editor">
     <EditorWindow/>
  </main>
</template>

<script>
import EditorWindow from '@/components/EditorWindow'

export default {
  name: 'Editor',
  components: {
     EditorWindow
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
