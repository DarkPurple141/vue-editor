<template>
   <div class="panes">
      <EditorPane>
         <EditorControlBar slot="controls"/>
         <EditPadContainer :file="file" slot="main"/>
      </EditorPane>
      <EditorPane>
         <EditConsole slot="main"/>
      </EditorPane>
   </div>
</template>

<script>
import EditorPane from './EditorPane'
import EditorControlBar from './EditorControlBar'
import EditPadContainer from './EditPadContainer'
import EditConsole from './EditConsole'

export default {
   name: 'EditorWindow',
   components: {
      EditorPane,
      EditorControlBar,
      EditPadContainer,
      EditConsole
   },
   props: {
      file: String
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
