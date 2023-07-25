import { Component, OnInit } from '@angular/core';

//Service
import { ClientesService } from 'src/app/services/clientes.service';

//inteface
import { Cliente } from 'src/app/interfaces/cliente'; 

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  clientes: Cliente[];
  numeros: number[] = [1, 2, 3, 4, 5];
  
  constructor(
    private clienteService: ClientesService
    ) {
      this.clientes = [{
        nombre: 'Nombre prueba',
        email: 'email@prueba',
        nivel: 5,
        descripcion: 'Es una descripción de prueba.',
      }];
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clienteService.deleteCliente(cliente);
    console.log(response);
  }

}
