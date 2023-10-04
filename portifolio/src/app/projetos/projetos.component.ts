import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Busca Soluções - Projetos');
  }
}
