import { EditorInstance, MenuItem  } from "@easylogic/editor";
import { REACT_COMPONENT_TYPE } from "./constants";
import ReactComponentHTMLRender from "./ReactComponentHTMLRender";
import { ReactComponentLayer } from "./ReactComponentLayer";



/**
 * 
 * initialize ReactComponent Plugin 
 * 
 * @param {EditorInstance} editor
 */
export default function (editor) {

    // register item layer 
    editor.registerComponent(REACT_COMPONENT_TYPE, ReactComponentLayer);

    // register inspector editor 
    editor.registerInspector(REACT_COMPONENT_TYPE, function (item) {
        return [
            {
                key: `value`,
                editor: 'TextEditor',
                editorOptions: {
                    label: 'Value',
                },
                value: item.value,
                refresh: true,
                defaultValue: item?.value
            },
        ]
    })

    // register html renderer 
    editor.registerRenderer('html', REACT_COMPONENT_TYPE, new ReactComponentHTMLRender())


    class AddReactComponent extends MenuItem {
        getIconString() {
            return 'add_box';
        }
        
        getTitle() {
            return this.props.title || "React Component";
        }
        
        isHideTitle() {
            return true;
        }
        
        clickButton(e) {
            this.emit('addLayerView', REACT_COMPONENT_TYPE);
        }
    }

    editor.registerMenuItem('sidebar', {
        AddReactComponent
    })
}
