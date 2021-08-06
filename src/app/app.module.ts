import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TablePrizesComponent } from './table-prizes/table-prizes.component';
import { TablePrizesDetailComponent } from './table-prizes-detail/table-prizes-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TablePrizesComponent,
    TablePrizesDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
