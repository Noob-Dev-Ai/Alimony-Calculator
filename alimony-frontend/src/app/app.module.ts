import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; // Import header

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Declare header component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // Ensure AppComponent is the entry point
})
export class AppModule {}
