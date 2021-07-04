import {Dom, Item, HTMLLayerRender} from '@easylogic/editor';
import { REACT_COMPONENT_TYPE } from './constants';


import createMyComponent from "./createMyComponent";


  
export default class ReactComponentHTMLRender extends HTMLLayerRender {

  update (item: Item, currentElement: Dom) {

    let $reactComponentArea = currentElement.$(".react-component-area");
    if ($reactComponentArea) {
      createMyComponent(item.attrs('value', 'background-color'), $reactComponentArea.el);
    }

    super.update(item, currentElement);
  }    

  render (item: Item) {
    var {id} = item;

    return /*html*/`
      <div class='element-item ${REACT_COMPONENT_TYPE}' data-id="${id}">
        ${this.toDefString(item)}
        <div class='react-component-area' data-domdiff-pass="true" style="width:100%;height:100%;"></div>
      </div>`
  }

}