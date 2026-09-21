import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  private el = inject(ElementRef);
  private render = inject(Renderer2);

  constructor() {
    this.render.setStyle(this.el.nativeElement, 'color', 'blue');
    this.render.setStyle(this.el.nativeElement, 'background-color', 'gray');
    // this.render.setProperty(this.el.nativeElement, 'innerText', 'Hello');

  }
}
