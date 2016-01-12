import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Resizable} from '../ng2-resizable';
import './app.scss';

@Component({
    selector: 'app',
    directives: [Resizable],
    template: `
    <nav resizable>
        <h2>Sidebar Navigation</h2>

    </nav>`
})
export class ExampleApp {

    constructor() {
        console.log('Example App started...');
    }
}

bootstrap(ExampleApp, []);
