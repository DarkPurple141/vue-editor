<template lang="html">
   <div class="sidebar">
      <p class="line-number" :key="row" v-for="row in rows">{{ row }}</p>
   </div>
</template>

<script>
export default {
   props: {
      rows: Number
   }
}
</script>

<style lang="less" scoped>

.sidebar {
   padding: 5px 0px;
   width: 50px;
   border-right: 1px solid #ddd;
   height: 90vh;
}

.line-number {
   color: #bbb;
}

</style>
