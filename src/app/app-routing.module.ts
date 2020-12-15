import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteSaidaListComponent } from './cliente-saida-list/cliente-saida-list.component';
import { CriarClienteComponent } from './criar-cliente/criar-cliente.component';
import { RegistrarSaidaClienteComponent } from './registrar-saida-cliente/registrar-saida-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: 'criar-cliente', component: CriarClienteComponent},
  {path: '', redirectTo: 'clientes', pathMatch: 'full' },
  {path: 'update-cliente/:id', component: UpdateClienteComponent},
  {path: 'registrar-saida-cliente/:id', component: RegistrarSaidaClienteComponent},
  {path: 'clientes-saida-list', component: ClienteSaidaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
