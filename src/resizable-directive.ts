import {ElementRef, Renderer, Input, Component, OnInit, } from 'angular2/core';
import {NgClass} from "angular2/common";
import './resizable-directive.scss';

@Component({
    selector: '[resizable]',
    directives: [NgClass],
    template: `<ng-content></ng-content><div class=grabber [ngClass]="resizeDirection"></div>`
})
export class Resizable implements OnInit {

    @Input('resizable') resizeDirection:String;
    private nativeElement:HTMLElement;

    constructor(private renderer:Renderer, private element: ElementRef) {
        console.log('resizable init', this.element);
        renderer.setElementClass(this.element, 'resizable', true);
    }

    ngOnInit() {
        console.log('resizeDirection: ', this.resizeDirection);
    }

}