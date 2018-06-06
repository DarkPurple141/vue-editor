<template lang="html">
   <div class="text">
      <textarea class="editpad" :rows="rows" cols="80"></textarea>
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
}
</style>
