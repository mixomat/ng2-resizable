import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Resizable} from 'ng2-resizable/ng2-resizable';

@Component({
    selector: 'app',
    directives: [Resizable],
    styles: [`
    @import url("//fonts.googleapis.com/css?family=Lato:400,300,700");

    body {
      color: #ffffff;
      font-family: 'Lato', sans-serif;
      text-align: center;
    }

    #sidebar {
      display: block;
      background: #51BBFE;
      width: 260px;
      max-width: 500px;
      min-width: 165px;
      min-height: 300px;
      margin-right: 15px;
      float: left;
    }

    #main {
      display: block;
      background: #757761;
      width: 500px;
      height: 300px;
      float: left;
    }
    `],
    template: `
    <section id="sidebar" [resizable]="['right', 'bottom']">
        <h2>Sidebar</h2>
    </section>
    <section id="main" [resizable]="['bottom']">
        <h2>Main Content</h2>
    </section>
    `
})
export class ExampleApp {
    constructor() {
        console.log('Example App started...');
    }
}

bootstrap(ExampleApp);
