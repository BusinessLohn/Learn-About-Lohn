import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
// import "@fontsource/jetbrains-mono"; // Defaults to weight 400
// import "@fontsource/jetbrains-mono/400.css"; // Specify weight
// import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
