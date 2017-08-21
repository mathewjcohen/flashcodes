import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { PythonComponent } from './python/python.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';

import { DatabaseService } from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    TypescriptComponent,
    PythonComponent,
    CSharpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
