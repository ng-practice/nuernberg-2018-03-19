import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[tr-click-once]'
})
export class ClickOnceDirective implements OnInit {
  /**
   * <button (tr-click-once)>
   */

  // tslint:disable-next-line:no-output-rename
  @Output('tr-click-once') clickOnce = new EventEmitter<MouseEvent>();

  constructor(
    private _element: ElementRef, // -> Zugriff auf Button <button tr-click-once>
    private _renderer: Renderer2
  ) {}

  // Wird gerufen, sobald die Direktive genutzt werden soll
  // <button tr-click-once>
  // ElementRef ist ein Button
  ngOnInit() {
    const button = this._element.nativeElement as HTMLButtonElement;

    const unsubscribe = this._renderer.listen(button, 'click', (event: MouseEvent) => {
      this._renderer.setAttribute(button, 'disabled', null);
      this.clickOnce.emit(event);

      unsubscribe();
    });
  }
}
