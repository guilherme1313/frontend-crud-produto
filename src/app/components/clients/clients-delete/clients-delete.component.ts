import { Clients } from './../clients.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-delete',
  templateUrl: './clients-delete.component.html',
  styleUrls: ['./clients-delete.component.css']
})
export class ClientsDeleteComponent implements OnInit {
  clients: Clients = {
    name: '',
    email: '',
    telefone: '',
    cpf: ''
  }

  constructor(private clientsService: ClientsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.clientsService.readById(id).subscribe(clients => {
      this.clients = clients;
    })
}

  deleteClients():void{
    this.clientsService.delete(`${this.clients.id}`).subscribe(() => {
      this.clientsService.showMessage("Cliente excluido com sucesso!");
    })
    this.router.navigate(['/clients']);
  }
  cancel(): void{
    this.router.navigate(['/clients']);
  }

}
