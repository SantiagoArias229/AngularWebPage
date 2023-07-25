import { Injectable } from '@angular/core';

//inteface
import { Cliente } from '../interfaces/cliente';

//Firebsee
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs'; //para recuperar los datos de data base

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore:Firestore) { }

  addCliente(cliente:Cliente){
    console.log(cliente);
    const clienteRef = collection(this.firestore, 'ClientesDB');
    return addDoc(clienteRef, cliente);
  }

  getClientes(): Observable<Cliente[]>{
    const clienteRef = collection(this.firestore, 'ClientesDB');
    return collectionData(clienteRef, {idField: 'id'})  as Observable<Cliente[]>;
  }
  
  deleteCliente(cliente:Cliente){
    const clienteDocRef = doc(this.firestore, 'cliente/${cliente.id}');
    return deleteDoc(clienteDocRef);
  }
}
