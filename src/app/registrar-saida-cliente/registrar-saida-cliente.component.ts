import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, ClienteSaida } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-registrar-saida-cliente',
  templateUrl: './registrar-saida-cliente.component.html',
  styleUrls: ['./registrar-saida-cliente.component.css']
})
export class RegistrarSaidaClienteComponent implements OnInit {

  clienteSaida = new ClienteSaida();
  id!: number;
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.getClienteById(this.id).subscribe(data =>{
      this.cliente = data;
      this.clienteSaida = this.cliente;
    }, error => console.log(error));
  }

  registrarSaidaCliente(){
    this.clienteService.registrarSaidaCliente(this.id, this.cliente).subscribe(data =>{
      console.log(data);
      this.irParaClienteList();
    }, 
    error => console.log(error)); 
  }

  onSubmit() {
    this.registrarSaidaCliente();
     
}

  irParaClienteList(){
    this.router.navigate(['/clientes']);
  }

}
