import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlinestyleComponent } from './inlinestyle/inlinestyle.component';
import { InlineTempelateComponent } from './inline-tempelate/inline-tempelate.component';
import { InlineTempStyleComponent } from './inline-temp-style/inline-temp-style.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseComponent } from './if-else/if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    InlinestyleComponent,
    InlineTempelateComponent,
    InlineTempStyleComponent,
    PropertyBindingComponent,
    IfElseComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
