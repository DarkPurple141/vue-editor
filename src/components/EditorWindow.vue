<template>
   <div class="panes">
      <EditorPane>
         <EditorControlBar slot="controls"/>
         <EditPadContainer slot="main"/>
      </EditorPane>
      <EditorPane/>
   </div>
</template>

<script>
import EditorPane from './EditorPane.vue'
import EditorControlBar from './EditorControlBar.vue'
import EditPadContainer from './EditPadContainer.vue'

export default {
   name: 'EditorWindow',
   components: { EditorPane, EditorControlBar, EditPadContainer }
}
</script>

<style lang='less' scoped>

.panes {
   display: flex;
   flex-direction: row;
   width: 100%;
}
</style>
