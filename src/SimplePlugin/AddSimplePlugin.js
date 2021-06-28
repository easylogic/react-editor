import { MenuItem } from "@easylogic/editor";
import { SIMPLE_TYPE } from "./constants";

export default class AddSimplePlugin extends MenuItem {

  getTitle() {
    return this.props.title || "Simple Plugin S";
  }

  isHideTitle() {
    return true; 
  }  

  clickButton(e) {
    this.emit('addLayerView', SIMPLE_TYPE, { 
      option: [1, 2, 3]
    });
  }

}