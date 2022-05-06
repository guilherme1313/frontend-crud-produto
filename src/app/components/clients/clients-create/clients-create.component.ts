import { ClientsService } from './../clients.service';
import { Clients } from './../clients.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {

  clients: Clients = {
    name: '',
    email: '',
    telefone: '',
    cpf: ''
  }

  constructor(private router: Router, private clientsService: ClientsService) { }

  ngOnInit(): void {
  }

  createClients(): void{
    if (this.clients.name != '' && this.clients.email != '' && this.clients.telefone != '' && this.clients.cpf != '') {
      this.clientsService.create(this.clients).subscribe(() => {
        this.clientsService.showMessage('Cliente cadastrado!');
        this.router.navigate(['/clients']);
      })
    }else{
      this.clientsService.showMessage("preencha todos os campos para cadastrar o cliente", true);
    }
  }

  cancel(): void{
    this.router.navigate(['/clients']);
  }

}
