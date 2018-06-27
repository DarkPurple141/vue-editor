<template lang="html">
   <div class="pane">
      <slot name="controls"></slot>
      <slot name="main"></slot>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.pane {
   height: 100vh;
   width: 50%;
}

.pane:first-of-type {
   border-right: 1px solid #ddd;
}

@media screen and (orientation: portrait) {
   .pane {
      width: 100%;
   }

   .pane:first-of-type {
      border-right: none;
      border-bottom: 1px solid #ddd;
      height: 60vh;
   }

   .pane:last-of-type {
      height: 40vh;
   }
}
</style>
