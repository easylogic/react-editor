import '@easylogic/editor/dist/editor.css';
import editor from '@easylogic/editor';
import SimplePlugin from './SimplePlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        SimplePlugin
    ]
})