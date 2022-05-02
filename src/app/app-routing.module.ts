import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { ClientsUpdateComponent } from './components/clients/clients-update/clients-update.component';
import { ClientsCreateComponent } from './components/clients/clients-create/clients-create.component';
import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import  {ProductCrudComponent} from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [{
  path: "",
  component:HomeComponent
},
{
path: "products",
component: ProductCrudComponent
},
{
  path:"products/create",
  component: ProductCreateComponent
},
{
  path:"products/update/:id",
  component:ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},
{
  path: "clients",
  component: ClientsCrudComponent
},
{
  path: "clients/create",
  component: ClientsCreateComponent
},
{
  path: "clients/edit/:id",
  component: ClientsUpdateComponent
},
{
  path: "clients/delete/:id",
  component: ClientsDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
