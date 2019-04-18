import { Component } from '@angular/core';
import { Directive, TemplateRef } from '@angular/core';

//classes
export abstract class FarmComponent {
  public sheepTemplate: TemplateRef<void>;
}

@Directive({
  selector: '[mySheepBlueprint]'
})
export class SheepBlueprintDirective  {
  constructor(templateRef: TemplateRef<void>, farm: FarmComponent) {
    farm.sheepTemplate = templateRef;
    debugger;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

@Component({
  selector: 'fence-comp',
  template: `<div class="fence">
      <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
      <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
      <ng-container [ngTemplateOutlet]="sheepTemplate"></ng-container>
   </div>`,
  styles: [`.fence{width:200px; height: 200px; border: 1px solid red;}`],
  providers: [{ provide: FarmComponent, useExisting: FenceComponent}]
})
export class FenceComponent extends FarmComponent {
 
}
let instance = 0;
@Component({
  selector: 'sheep-comp',
  template: `<div class="sheep">🐑 {{count}}</div>`,
  styles: [`.sheep{color: green;}`]
})
export class SheepComponent  {
 public count = ++instance;
}
