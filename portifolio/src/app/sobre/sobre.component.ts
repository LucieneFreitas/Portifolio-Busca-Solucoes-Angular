import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Busca Soluções - Sobre');
  }
}
