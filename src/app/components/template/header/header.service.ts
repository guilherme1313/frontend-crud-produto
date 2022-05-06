import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title:'Inicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor(private snackBar: MatSnackBar) { }

  get headerData(): HeaderData{
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
}
