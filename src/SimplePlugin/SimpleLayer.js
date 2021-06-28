import {Component} from "@easylogic/editor";
import { SIMPLE_TYPE } from "./constants";

export default class SimpleLayer extends Component {


    convert(json) {
      json = super.convert(json);

      if (typeof json.value !== 'number') {
        json.value = Math.floor(json.value);
      }

      return json;
    }

    getDefaultObject() {
      return super.getDefaultObject({
        itemType: SIMPLE_TYPE,
        name: "New Simple",
        options: [1, 2, 3, 4, 5],
        value: 1,
      });
    }

    toCloneObject() {

      return {
        ...super.toCloneObject(),
        ...this.attrs(
          'options',
        ),
      }
    }

    enableHasChildren() {
      return false;
    }

    getDefaultTitle() {
      return "Simple";
    }

  }