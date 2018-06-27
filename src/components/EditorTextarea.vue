<template lang="html">
   <div class="root">
      <!-- where edits take place -->
      <div class="text edit">
         <textarea
            @input="commit_edit"
            @keydown.tab.stop="tab_handler"
            v-model="edit"
            class="editpad"
            :rows="rows" cols="80">
         </textarea>
      </div>
      <!-- actual render area -->
      <div class="text">
         <EditRenderArea :file="{ content: edit, ftype: file_type }"/>
      </div>
   </div>

</template>

<script>
import EditRenderArea from './EditRenderArea'

export default {

   components: {
      EditRenderArea
   },
   data() {
      return {
         edit: ""
      }
   },
   props: {
      rows: Number
   },
   methods: {
      commit_edit() {
         this.$store.commit('EDIT', this.edit)
      },
      tab_handler(e) {
         e.preventDefault()
         //this.edit.append('')
         let index = e.target.selectionEnd
         this.edit =
            this.edit.substring(0, index) + '\t' + this.edit.substring(index, this.length)
         setTimeout(() => e.target.setSelectionRange(index+1, index+1), 0)

      }
   },
   computed: {
      file_type() {
         return this.$store.getters.ftype
      }
   }
}
</script>

<style lang="less" scoped>
.text {
   position: absolute;
   top: 0;
   left: 0;
   padding: 5px;
   // make this reactive
   tab-size: 4;
}

// needed to prevent selection of lower element
.edit {
   z-index: 10;
}

.root {
   position: relative;
   width: 100%;
}

.editpad {
   /*margin-left: 10px;*/
   font-family: monospace;
   caret-color: black;
   color: transparent;
   width: 100%;
   line-height: inherit;
   border: none;
   font-size: inherit;
   outline: none;
   min-height: 500px;
   resize: none;
   background-color: transparent;
}

</style>
