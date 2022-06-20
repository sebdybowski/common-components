/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@common-components/core';




export declare interface ButtonComponent extends Components.ButtonComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'button-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class ButtonComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface HeadingComponent extends Components.HeadingComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['content', 'level']
})
@Component({
  selector: 'heading-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['content', 'level']
})
export class HeadingComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LinkComponent extends Components.LinkComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['blank', 'label', 'url']
})
@Component({
  selector: 'link-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['blank', 'label', 'url']
})
export class LinkComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ParagraphComponent extends Components.ParagraphComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['content']
})
@Component({
  selector: 'paragraph-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['content']
})
export class ParagraphComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
