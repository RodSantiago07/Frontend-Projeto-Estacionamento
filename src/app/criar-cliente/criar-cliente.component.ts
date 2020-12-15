import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

    salvarCliente() {
    this.clienteService.criarCliente(this.cliente).subscribe(data =>{
      console.log(data);
      this.irParaClienteList();
    },
    error => console.log(error));
  }

  irParaClienteList(){
    this.router.navigate(['/clientes']);

  }

  onSubmit() {
    console.log(this.cliente);
    this.salvarCliente();
  }


}
