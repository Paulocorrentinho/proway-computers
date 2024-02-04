import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})

export class BarraPesquisaComponent implements OnInit {
  descricao = "";
 
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}
