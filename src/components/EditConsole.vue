<template lang="html">
   <div class="render-zone">
      <div class="console" v-if="$store.getters.ftype == 'js'">
         <div class="exec">
            <button type="button" name="Run"
            @click.prevent="$store.dispatch('execute')">Run</button>
         </div>
         {{ script }}
      </div>
      <div v-else>
         <StatusButton>
            {{ status_text }}
         </StatusButton>
         <iframe :src="'data:text/html;charset=utf-8,'+html" class="standard html"
            v-if="$store.getters.ftype == 'html'">
         </iframe>
         <div v-else-if="$store.getters.ftype == 'md'" class="markdown" v-html="markdown">
         </div>
         <div v-else class="text">
            <h2>About</h2>
            <p>This is a text editor! The left panel allows you to write code
               with syntax highlighting support built in. Give it a try by changing
               the filename. The default is plain text, but most languages are supported.
               Otherwise the editor supports HTML, Markdown and JS execution in this panel.
               Give it a whirl.</p>
            <br>
            <p>Source code <a href="https://editor.alhinds.com/">here</a>.</p>
         </div>

      </div>

   </div>
</template>

<script>

import marked from 'marked'
import StatusButton from './StatusButton'
import { language } from '@/helpers'

export default {
   computed: {
      script() {
         return this.$store.state.file.output || "Script output will appear here."
      },
      html() {
         return this.$store.state.file.contents
      },
      markdown() {
         return marked(this.$store.state.file.contents)
      },
      status_text() {
         return language(this.$store.getters.ftype)
      }
   },
   components: {
      StatusButton
   }
}
</script>

<style lang="css" scoped>

.render-zone {
   position: relative;
}

.exec {
   position: absolute;
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

.markdown, .html {
   padding: 5px;
   text-align: left;
   font-family: inherit;
}

.text {
   margin: auto;
   text-align: left;
   font-family: inherit;
   padding: 10px;
   width: 80%;
   line-height: 2;
}

iframe.standard {
   width: 100%;
   background-color: transparent;
   border: 0px none transparent;
   padding: 0px;
   overflow: hidden;
}

.console {
   background-color: grey;
   color: white;
   font-family: monospace;
   padding: 5px;
   text-align: left;
   height: calc(100vh - 10px);
}

@media screen and (orientation: portrait) {
   .console {
      height: 40vh;
   }
}
</style>
