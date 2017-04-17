import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[jkHighlight]'
})

export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
