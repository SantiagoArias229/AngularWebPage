import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clienteService:ClientesService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.formulario = new FormGroup(
      {
        nombre: new FormControl(),
        email: new FormControl(),
        nivel: new FormControl(),
        descripcion: new FormControl(),
      }
    )
  }
  
  ngOnInit(): void{
    console.log('Se ha llamado OnInit');
    // Configura el FormGroup con los campos y validaciones necesarios
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nivel: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      descripcion: ['', Validators.required]
    });
  }

  async onSumit() {
    console.log('Se ha llamado OnSumit');
    console.log(this.formulario.value)
    const response = await(this.clienteService.addCliente(this.formulario.value));
    console.log(response);

    // Navegar a la página principal después de guardar los datos
    this.router.navigate(['/']); // Cambia '/' por la ruta de la página principal de tu aplicación
    
  }

}
