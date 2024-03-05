import React, { useEffect } from 'react'
import Codemirror from 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint'; 

const Editor = ({language}) => {
  useEffect(() => {
    console.log(language)
    async function init(){
      const editor =Codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
        mode: {name: language, json:true},
        theme: 'monokai',
        autoCloseTag: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        matchBrackets: true,
        indentWithTabs: true,
        smartIndent: true,
        hintOptions: {
          completeSingle: false,
        },
      });
      
      editor.on('keyup', (cm, event) => {
        if (event.key.length === 1 || event.key === '.') {
          Codemirror.commands.autocomplete(editor, null, { completeSingle: false });
        }
      });
    }


    init();
  },[])

  return (<textarea id='realtimeEditor'/>)
}

export default Editor