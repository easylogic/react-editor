import { EditorElement, EditorInstance, ElementValue, MenuItem  } from "@easylogic/editor";
import { REACT_COMPONENT_TYPE } from "./constants";
import ReactComponentHTMLRender from "./ReactComponentHTMLRender";
import { ReactComponentLayer } from "./ReactComponentLayer";



/**
 * 
 * initialize ReactComponent Plugin 
 *
 */
export default function (editor: EditorInstance) {

    // register item layer 
    editor.registerComponent(REACT_COMPONENT_TYPE, ReactComponentLayer);

    // register inspector editor 
    editor.registerInspector(REACT_COMPONENT_TYPE, function (item: any) {
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
        
        clickButton() {
            this.emit('addLayerView', REACT_COMPONENT_TYPE);
        }
    }

    editor.registerMenuItem('sidebar', {
            AddReactComponent
        } as unknown as ElementValue<EditorElement>)
}
