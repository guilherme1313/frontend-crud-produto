import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Clients } from './clients.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl = `${environment.api}/clients/`;
 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(clients: Clients): Observable<Clients> {
    return this.http.post<Clients>(`${this.baseUrl}`, clients);
  }

  read(): Observable<Clients[]> {
    return this.http.get<Clients[]>(`${this.baseUrl}`);
  }

  readById(id: string ): Observable<Clients>{
    const url = `${this.baseUrl}${id}`;
   return this.http.get<Clients>(url);
  }

  update(clients: Clients): Observable<Clients>{
    const url = `${this.baseUrl}${clients.id}`;
    return this.http.put<Clients>(url, clients);
  }

  delete(id: string): Observable<Clients>{
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<Clients>(url);
  }
}
