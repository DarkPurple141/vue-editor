<template lang="html">
   <div class="console">
      <div v-if="$store.getters.ftype == 'js'">
         <div class="exec">
            <button type="button" name="Run"
            @click.prevent="$store.dispatch('execute')">Run</button>
         </div>
         {{ script }}
      </div>
      <div v-html="html" v-else-if="$store.getters.ftype == 'html'" class="standard">
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      script() {
         return this.$store.state.file.output || "Script output will appear here."
      },
      html() {
         return this.$store.state.file.contents
      }
   },
}
</script>

<style lang="css" scoped>

.exec {
   position: fixed;
   right: 0px;
   margin: 5px;
}

.exec button {
   margin: 5px;
   padding: 10px;
   font-size: 16px;
   box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
   outline: none;
   cursor: pointer;
   transition: all 0.3s ease-in-out;
}

.exec button:hover {
   transform: translate(0px, -5px) scale(1.1);
   box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.4);
}

.console {
   background-color: grey;
   color: white;
   font-family: monospace;
   padding: 5px;
   text-align: left;
   height: 100%;
}

@media screen and (orientation: portrait) {
   .console {
      height: 40vh;
   }
}
</style>
