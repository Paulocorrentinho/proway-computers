import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [{ path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
{path: "", redirectTo: "produtos", pathMatch: "full"},
{ path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
{ path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
{path: "**", component: NaoEncontradaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatSnackBarModule,
    CommonModule,
    FormsModule
  ],
 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
