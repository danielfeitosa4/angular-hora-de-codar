import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    IfRenderComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
