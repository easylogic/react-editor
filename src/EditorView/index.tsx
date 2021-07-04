import * as React from "react";
import editor, {PluginInterface} from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import ReactComponentPlugin from '../ReactComponentPlugin';

interface EditorViewProps {
    plugins?: PluginInterface[];
}

export default function EditorView({plugins = []}: EditorViewProps) {
    const editorRef = React.useRef();

    React.useEffect(() => {
        const editorInstance = editor.createDesignEditor({
            container: editorRef.current,
            plugins: [
                ReactComponentPlugin,
                ...plugins
            ]
        }) 
        return () => {
            editorInstance.destroy();
        }
    }, [])

    return <div ref={editorRef} className={`editor-view`}></div>
}