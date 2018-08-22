import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autofoco]'
})
export class AutofocoDirective {

  constructor(private el: ElementRef, private renderer: Renderer)
  {        
  }
  ngOnInit(){
  }

  ngAfterViewChecked(){
      this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }
}
