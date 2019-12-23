import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularCalculatorComponent} from './angular-calculator/angular-calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {CountdownComponent} from './countdown/countdown.component';
import {TodoComponent} from './todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {AppRoutingModule} from './app-routing.module';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    AngularCalculatorComponent,
    ColorPickerComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
