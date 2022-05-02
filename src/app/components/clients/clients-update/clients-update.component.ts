import { Clients } from './../clients.model';
import { ClientsService } from './../clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.css']
})
export class ClientsUpdateComponent implements OnInit {

  clients: Clients = {
    name: '',
    email: '',
    telefone: '',
    cpf: ''
  }

  constructor(private router: Router, private clientsService: ClientsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.clientsService.readById(id).subscribe(clients => {
      this.clients = clients;
    });
  }

  updateClients(): void{
    if (this.clients.name != '' && this.clients.email != '' && this.clients.telefone != '' && this.clients.cpf != '') {
      this.clientsService.update(this.clients).subscribe(() => {
        this.clientsService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/clients']);
      })
    }else{
      this.clientsService.showMessage("preencha todos os campos para atualizar o cliente", true);
    }
  }

  cancel(): void{
    this.router.navigate(['/clients']);
  }

}
