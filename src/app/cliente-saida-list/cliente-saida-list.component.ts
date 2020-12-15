import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, ClienteSaida } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-saida-list',
  templateUrl: './cliente-saida-list.component.html',
  styleUrls: ['./cliente-saida-list.component.css']
})
export class ClienteSaidaListComponent implements OnInit {

  clientes!: Cliente[]
  clienteSaida!: ClienteSaida[]

  
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
     this.clienteService.getClientesList().subscribe(data =>{
      console.log(data);
      this.clientes = data;
    });
  }

}
