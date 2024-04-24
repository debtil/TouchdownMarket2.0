import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './admin/add-product/add-product.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AddStoreComponent } from './adminMaster/add-store/add-store.component'
import { LoginComponent } from './views/login/login.component';
import { ShowdownComponent } from './views/showdown/showdown.component';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { CartComponent } from './views/cart/cart.component';
import { HomeComponent } from './views/home/home.component';

import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: ListProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: EditProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-store',
    component: AddStoreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'showdown',
    component: ShowdownComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
