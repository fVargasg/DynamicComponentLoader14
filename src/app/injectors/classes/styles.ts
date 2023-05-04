export class Styles {
    IdElement: string;
    Css: string;

    /** This class carries the css styles for the component. 
     * IdElement is the id for the Html element that will host the css.
    */
    constructor(_IdElement: string, _Css: string) {
        this.IdElement = _IdElement;
        this.Css = _Css;
    }
}