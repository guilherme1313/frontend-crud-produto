import { Router } from '@angular/router';

import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-crud',
  templateUrl: './clients-crud.component.html',
  styleUrls: ['./clients-crud.component.css']
})
export class ClientsCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) { 
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'people',
      routeUrl: '/clients'
    }
  }

  ngOnInit(): void {
  }

  novoCliente(): void{
    this.router.navigate(['/clients/create']);
  }

}
