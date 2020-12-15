import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CriarClienteComponent } from './criar-cliente/criar-cliente.component';
import {FormsModule } from '@angular/forms';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { RegistrarSaidaClienteComponent } from './registrar-saida-cliente/registrar-saida-cliente.component';
import { ClienteSaidaListComponent } from './cliente-saida-list/cliente-saida-list.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    CriarClienteComponent,
    UpdateClienteComponent,
    RegistrarSaidaClienteComponent,
    ClienteSaidaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
