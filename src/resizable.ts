import {ElementRef, Renderer, Input, Component, OnInit} from 'angular2/core';
import {NgClass, NgFor} from "angular2/common";

@Component({
    selector: '[resizable]',
    host: {
        '(document:mousemove)': 'onResize($event)',
        '(document:mouseup)': 'onResizeEnd($event)',
    },
    directives: [NgClass, NgFor],
    styles: [`
        .resizable {
          position: relative;
        }

        .resizable .grabber {
          display: block;
          width: 14px;
          height: 14px;
          line-height: 14px;
          position: absolute;
          z-index: 1;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          background: transparent;
        }

        .resizable .grabber:after {
          content: '';
          position: absolute;
          display: block;
          box-sizing: border-box;
          border: 1px solid #ccc;
        }

        .resizable .grabber.right::after, .resizable .grabber.left::after {
          border-width: 0 1px;
          top: 50%;
          margin: -10px 0 0 3.5px;
          height: 20px;
          width: 7px;
        }

        .resizable .grabber.top::after, .resizable .grabber.bottom::after {
          border-width: 1px 0;
          left: 50%;
          margin: 3.5px 0 0 -10px;
          width: 20px;
          height: 7px;
        }

        .resizable .grabber.top {
          cursor: row-resize;
          width: 100%;
          top: 0;
          left: 0;
          margin-top: -14px;
        }

        .resizable .grabber.right {
          cursor: col-resize;
          height: 100%;
          right: 0;
          top: 0;
          margin-right: -14px;
        }

        .resizable .grabber.bottom {
          cursor: row-resize;
          width: 100%;
          bottom: 0;
          left: 0;
          margin-bottom: -14px;
        }

        .resizable .grabber.left {
          cursor: col-resize;
          height: 100%;
          left: 0;
          top: 0;
          margin-left: -14px;
        }
    `],
    template: `
        <ng-content></ng-content>
        <div class=grabber [ngClass]="dir" *ngFor="#dir of directions" (mousedown)="onResizeStart($event, dir)"></div>
    `
})
export class Resizable implements OnInit {
    @Input('resizable') directions:Array<String>;

    private direction:String;
    private start:number;
    private width:number;
    private height:number;


    constructor(private renderer:Renderer, private element:ElementRef) {
        console.log('resizable init', this.element);
        renderer.setElementClass(this.element, 'resizable', true);
    }

    ngOnInit() {
        console.log('resize direction: ', this.directions);
    }

    private onResizeStart(event:MouseEvent, direction:String) {
        this.direction = direction;
        this.start = this.isHorizontalResize(this.direction) ? this.getClientX(event) : this.getClientY(event);
        this.width = this.element.nativeElement.clientWidth;
        this.height = this.element.nativeElement.clientHeight;

        if (event.stopPropagation)
            event.stopPropagation();
        if (event.preventDefault)
            event.preventDefault();
        event.cancelBubble = true;
        event.returnValue = false;

        console.log("starting resize: ", this.direction, this.start);
    }

    private onResizeEnd(event:MouseEvent) {
        if (this.direction) {
            console.log("onResizeEnd");
            this.direction = null;
            this.start = 0;
        }
    }

    private onResize(event:MouseEvent) {
        if (this.direction) {
            let offset = this.isHorizontalResize(this.direction) ? this.start - this.getClientX(event) : this.start - this.getClientY(event);
            console.log('offset', offset);
            switch (this.direction) {
                case 'bottom':
                    this.renderer.setElementStyle(this.element, 'height', this.height - offset + 'px');
                    break;
                case 'left':
                    this.renderer.setElementStyle(this.element, 'width', this.width + offset + 'px');
                    break;
                case 'right':
                    this.renderer.setElementStyle(this.element, 'width', this.width - offset + 'px');
                    break;
            }
        }
    }


    private isHorizontalResize(direction:String) {
        return direction === 'left' || direction === 'right';
    };

    private getClientX(event:MouseEvent|TouchEvent) {
        if (event instanceof TouchEvent)
            return (<TouchEvent>event).touches[0].clientX
        else
            return (<MouseEvent>event).clientX;
    };

    private getClientY(event:MouseEvent|TouchEvent) {
        if (event instanceof TouchEvent)
            return (<TouchEvent>event).touches[0].clientY;
        else
            return (<MouseEvent>event).clientY;
    };

}