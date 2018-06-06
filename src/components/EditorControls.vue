<template lang="html">
   <div class="controls">
      <select class="control-grp" v-for="(control, i) in controls" :key="i">
         <optgroup :label="control.label">
            <option v-for="(option, j) in control.items" :key="j"
               :value="option" >{{ option }}</option>
         </optgroup>
      </select>
   </div>
</template>

<script>
export default {
   data() {
      return {
         controls: [
            {
               label: 'Font Size',
               items: [
                  '12px',
                  '16px',
                  '20px'
               ]
            },
            {
               label: 'Indent',
               items: [
                  '2',
                  '4',
                  '8'
               ]
            }
         ]
      }
   }
}
</script>

<style lang="less" scoped>
.control-grp {
   padding: 5px;
   margin: 5px;
   font-size: inherit;
}
</style>
