import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    if (this.product.name != '' && this.product.price) {
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['/products']);
      })
    }else{
      this.productService.showMessage("preencha todos os campos para atualizar o produto", true);
    }

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
