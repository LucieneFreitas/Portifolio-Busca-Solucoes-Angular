import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Busca Soluções - Contatos');
  }
}
