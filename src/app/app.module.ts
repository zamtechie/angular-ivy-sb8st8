import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './list/main.component';
import { DetailComponent } from './list/detail/detail.component';

import { AppComponent } from './app.component';
import { AppRouteModule } from './AppRouteModule';
import { HttpClientModule } from '@angular/common/http';

/*import { HelloComponent } from './hello.component';
import { MainComponent } from './list/main.component';*/

@NgModule({
  imports: [BrowserModule, FormsModule, AppRouteModule, HttpClientModule],
  declarations: [AppComponent, MainComponent, DetailComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
