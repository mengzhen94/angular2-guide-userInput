import { Component } from '@angular/core';
/* . While the statement does nothing useful, it satisfies Angular's requirement 
so that Angular will update the screen. */
@Component({
    selector: 'loop-back',
    template: `
        <input #box (keyup)="0">
        <p>{{box.value}}</p>
    `
})

export class LoopbackComponent { }