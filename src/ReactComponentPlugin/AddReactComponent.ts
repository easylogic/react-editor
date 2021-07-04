
import { MenuItem } from "@easylogic/editor";
import { REACT_COMPONENT_TYPE } from "./constants";

export default class AddReactComponent extends MenuItem {
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