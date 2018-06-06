<template lang="html">
   <section class="nav">
      <nav class="nav-inner">
         <div class="nav-block file-name">
            <input type="text" placeholder="Filename" class="file-name-input"/>
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
   components: { EditorControls }
}
</script>

<style lang="less" scoped>
.nav {
   background-color: #fafafa;
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
}

</style>
