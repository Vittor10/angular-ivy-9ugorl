import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MatDividerModule],
  declarations: [AppComponent, ExerciseComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
