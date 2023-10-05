import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projetos } from '../_models/projetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  project: projetos = {
    id: 0,
    name: 'Redes',
    summary: 'Redes de computadores',
    description: '',
    projetoLink: '',
    pictures: []
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Busca Soluções - Projetos');
  }
}
