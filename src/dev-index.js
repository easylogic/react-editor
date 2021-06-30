import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import ReactComponentPlugin from './ReactComponentPlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        ReactComponentPlugin
    ]
})