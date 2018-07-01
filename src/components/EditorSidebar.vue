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
   height: calc(100vh - 70px);
}

.line-number {
   color: #bbb;
}

@media screen and (orientation: portrait)  {
   .sidebar {
      height: calc(60vh - 70px);
   }

}

</style>
