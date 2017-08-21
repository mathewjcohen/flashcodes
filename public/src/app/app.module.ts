import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { PythonComponent } from './python/python.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';

import { DatabaseService } from './database.service';
import { AdminEditDeleteComponent } from './admin-edit-delete/admin-edit-delete.component';
import { FlashcodesComponent } from './flashcodes/flashcodes.component';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    TypescriptComponent,
    PythonComponent,
    CSharpComponent,
    AdminEditDeleteComponent,
    FlashcodesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
