import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * Utility function to inject CSS into the DOM.
   * @param id string
   * @param styles string
   */
  injectCssIntoDom(id: string, styles: string) {
    const style = document.createElement('style');
    style.setAttribute("id", id)
    style.textContent = styles;
    document.head.append(style);
  }

  /**
   * Utility function to remove element by id.
   * @param id string => id of the element that we want to remove from the dom.
   */
  removeElementFromDom(id: string) {
    document.getElementById(id)?.remove();
  }
}
