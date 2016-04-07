import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[myHighlight]',
    host: {
    	'(mouseenter)': 'onMouseEnter()',
    	'(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
	private _highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}

    constructor(private el: ElementRef) {
       this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    onMouseEnter() {
    	this._highlight('red');
    }

    onMouseLeave() {
    	this._highlight('blue');
    }
}
