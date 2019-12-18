import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import {AngularCalculatorComponent} from './angular-calculator/angular-calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {NameCardComponent} from './name-card/name-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    AngularCalculatorComponent,
    ColorPickerComponent,
    NameCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
