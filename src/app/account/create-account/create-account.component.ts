import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Create } from './create.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  create: Create = {
    nome: '',
    email: '',
    senha: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    if(this.create.email != '' && this.create.nome != '' && this.create.senha != ''){
      try {
        const result = await this.accountService.createAccount(this.create);
        this.router.navigate(['login']);
       this.accountService.showMessage("usuario cadastrado com sucesso!");
      } catch (error) {
        console.error(error);
      }
    }else{
      this.accountService.showMessage("Preencha todos os campos para realizar o cadastrado!", true);
    }
  }

}
