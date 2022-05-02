import { ClientsService } from './../clients.service';
import { Clients } from './../clients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.css']
})
export class ClientsReadComponent implements OnInit {
 clients: Clients[] = [];
 displayedColumns = ['id', 'name', 'email','telefone', 'cpf', 'action']
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.read().subscribe(clients => {
      this.clients = clients
     
    })
  }

}
