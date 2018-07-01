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
import { EditorPane, EditorControlBar, EditPadContainer,
   EditConsole } from '@/components'

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
