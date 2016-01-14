import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Resizable} from '../ng2-resizable';
import './app.scss';

@Component({
    selector: 'app',
    directives: [Resizable],
    template: `
    <section id="sidebar" resizable="right">
        <h2>Sidebar</h2>
    </section>
    <section id="main" resizable="right">
        <h2>Main Content</h2>
    </section>
    `
})
export class ExampleApp {

    constructor() {
        console.log('Example App started...');
    }
}

bootstrap(ExampleApp, []);
