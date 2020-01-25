import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodawanieAutorComponent } from './dodawanie-autor/dodawanie-autor.component';
import { DodawanieKsiazkaComponent } from './dodawanie-ksiazka/dodawanie-ksiazka.component';
import { DodawanieStudentComponent } from './dodawanie-student/dodawanie-student.component';
import { WypozyczeniaComponent } from './wypozyczenia/wypozyczenia.component';
import { UsuwanieKsiazkaComponent } from './usuwanie-ksiazka/usuwanie-ksiazka.component';

@NgModule({
  declarations: [
    AppComponent,
    DodawanieAutorComponent,
    
    DodawanieKsiazkaComponent,
    
    DodawanieStudentComponent,
    
    WypozyczeniaComponent,
    
    UsuwanieKsiazkaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
