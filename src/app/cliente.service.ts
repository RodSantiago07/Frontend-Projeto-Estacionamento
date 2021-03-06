import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, ClienteSaida } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://localhost:8080/clientes/todosClientes";

  constructor(private httpClient: HttpClient) { }

  getClientesList(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
    
  }

  criarCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cliente);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);

  }

  updateCliente(id: number, cliente: Cliente): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, cliente);

  }

  deleteCliente(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  registrarSaidaCliente(id: number, cliente: Cliente): Observable<Object> {
    return this.httpClient.patch(`${this.baseURL}/${id}`, cliente);

  }

  getClientesSaidaList(): Observable<ClienteSaida[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }


}
