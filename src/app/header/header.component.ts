import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { BarraPesquisaComponent } from "../barra-pesquisa/barra-pesquisa.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [BarraPesquisaComponent]
})
export class HeaderComponent {

constructor (
  public carrinhoService: CarrinhoService,
) {

}
}
