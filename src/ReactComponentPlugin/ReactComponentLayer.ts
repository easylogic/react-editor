
import { Component } from "@easylogic/editor";
import { REACT_COMPONENT_TYPE } from "./constants";


export class ReactComponentLayer extends Component {

  getDefaultObject(obj = {}) {
    const data = super.getDefaultObject({
      itemType: REACT_COMPONENT_TYPE,
      name: "New React Component",
      value: 'test', 
      ...obj
    }); 

    return data;
  }

  toCloneObject() {

    return {
      ...super.toCloneObject(),
      ...this.attrs(
        'value'
      ),
    }
  }

  enableHasChildren() {
    return false; 
  }

  getDefaultTitle() {
    return "React Component";
  }

}
