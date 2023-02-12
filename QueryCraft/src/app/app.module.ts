import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchAnimationComponent } from './search-animation/search-animation.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextHighlightComponent } from './text-highlight/text-highlight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildQueryComponent } from './build-query/build-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchAnimationComponent,
    TutorialsComponent,
    TextHighlightComponent,
    BuildQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
