import {Component} from 'angular2/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";

@Component({
    selector: 'app',
    template: `
<my-puzzle></my-puzzle>    `,
    directives:[PuzzleComponent]
})
export class AppComponent {

}