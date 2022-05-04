import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    if(this.login.email != '' && this.login.password != ''){
      try {
        const result = await this.accountService.login(this.login);
        // navego para a rota vazia novamente
        if(result){
          this.router.navigate(['inicio']);
          this.accountService.showMessage("Logado com sucesso!");
        }else{
         
          this.router.navigate(['']);
         
        }
      } catch (error) {
        console.error(error);
      }
    }else{
      this.accountService.showMessage("preencha todos os campos para efetuar o login!", true);
    }
  }

}
