import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FenceComponent } from './app.component';
import { SheepComponent } from './app.component';
import { SheepBlueprintDirective } from './app.component';

import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FenceComponent, SheepComponent, SheepBlueprintDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
