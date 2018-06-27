<template>
   <div class="panes">
      <EditorPane>
         <EditorControlBar slot="controls"/>
         <EditPadContainer :file="file" slot="main"/>
      </EditorPane>
      <EditorPane>
         <EditRenderArea slot="main" :file="rendered"/>
      </EditorPane>
   </div>
</template>

<script>
import EditorPane from './EditorPane.vue'
import EditorControlBar from './EditorControlBar.vue'
import EditPadContainer from './EditPadContainer.vue'
import EditRenderArea from './EditRenderArea.vue'

export default {
   name: 'EditorWindow',
   components: {
      EditorPane,
      EditorControlBar,
      EditPadContainer,
      EditRenderArea
   },
   props: {
      file: String
   },
   computed: {
      rendered() {
         return {
            content: this.file,
            ftype: this.$store.getters.ftype
         }
      }
   }
}
</script>

<style lang='less' scoped>

.panes {
   display: flex;
   flex-direction: row;
   width: 100%;
}

@media screen and (orientation: portrait) {
   .panes {
      flex-direction: column;
   }
}
</style>
