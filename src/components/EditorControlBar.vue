<template lang="html">
   <section class="nav">
      <nav class="nav-inner">
         <div class="nav-block file-name">
            <input type="text"
               v-model="fname"
               spellcheck="false"
               placeholder="filename.ext"
               class="file-name-input"
               @change="fname_handler"
            />
         </div>
         <div class="nav-block controls">
            <EditorControls/>
         </div>
      </nav>
   </section>
</template>

<script>
import EditorControls from './EditorControls'

export default {
   components: { EditorControls },
   data() {
      return {
         fname: ""
      }
   },
   methods: {
      fname_handler() {
         if (this.fname)
            this.$store.commit('FNAME', this.fname)
      }
   }
}
</script>

<style lang="less" scoped>
.nav {
   background-color: #f7f7f7;
   width: 100%;
   height: 60px;
   display: flex;
   border-bottom: 1px solid #ddd;
}

.nav-inner {
   width: inherit;
   display: flex;
   flex-flow: row;
   justify-content: space-between;
   align-items: center;
}

.nav-block {
   margin: 20px 10px;
}

.file-name-input {
   border: 1px solid #ddd;
   border-radius: 5px;
   padding: 5px;
   margin: auto;
   font-size: inherit;
   max-width: 120px;
}

</style>
