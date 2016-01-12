import {Directive, ElementRef, Renderer} from 'angular2/core';


@Directive({
    selector: '[resizable]'
})
export class Resizable {

    constructor(element: ElementRef, renderer: Renderer) {
        console.log('resizable element: ', element);
    }

}