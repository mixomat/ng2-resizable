import {ElementRef, Renderer, Input, Component, OnInit, } from 'angular2/core';
import {NgClass, NgFor} from "angular2/common";
import './resizable-directive.scss';

@Component({
    selector: '[resizable]',
    directives: [NgClass, NgFor],
    template: `<ng-content></ng-content><div class=grabber [ngClass]="dir" *ngFor="#dir of directions"></div>`
})
export class Resizable implements OnInit {
    @Input('resizable') directions:Array<String>;

    constructor(private renderer:Renderer, private element: ElementRef) {
        console.log('resizable init', this.element);
        renderer.setElementClass(this.element, 'resizable', true);
    }

    ngOnInit() {
        console.log('resize direction: ', this.directions);
    }

}