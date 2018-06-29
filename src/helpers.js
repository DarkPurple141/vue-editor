
const is_plain = (ftype) => (!ftype || ftype == 'md' || ftype == 'txt' || ftype == 'text')

const language = (ftype) => {
   switch (ftype) {
      case 'js':
         return 'Javascript'
      case 'md':
         return 'Markdown'
      case 'html':
         return 'HTML'
      default:
         return 'Text'
   }
}

export { is_plain, language }
