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
</style>
