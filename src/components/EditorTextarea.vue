<template lang="html">
   <div class="text">
      <textarea
         @input="commit"
         @keydown.tab="tabhandler"
         v-model="edit"
         class="editpad"
         :rows="rows" cols="80">
      </textarea>
   </div>
</template>

<script>
export default {
   data() {
      return {
         edit: ""
      }
   },
   props: {
      rows: Number
   },
   methods: {
      commit() {
         this.$store.commit('EDIT', this.edit)
      },
      tabhandler(e) {
         e.preventDefault()
         //this.edit.append('')
         let index = e.target.selectionEnd
         this.edit =
            this.edit.substring(0, index) + '   ' + this.edit.substring(index, this.length)
      }
   }
}
</script>

<style lang="less" scoped>
.text {
   width: 100%;
   padding: 5px;
}

.editpad {
   /*margin-left: 10px;*/
   width: 100%;
   line-height: inherit;
   border: none;
   font-size: inherit;
   outline: none;
   min-height: 500px;
   resize: none;
}
</style>
