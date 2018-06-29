<template lang="html">
   <div class="status">
      <div class="inner">
         <slot></slot>
      </div>
   </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.status {
   position: fixed;
   right: 0px;
}

.status .inner {
   background-color: rgba(80,80,80,0.5);
   color: #fefefe;
   padding: 10px;
   font-weight: bold;
   font-size: 16px;
   outline: none;
   user-select: none;
}

</style>
