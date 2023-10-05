import { Component, Input } from '@angular/core';
import { projetos } from '../_models/projetos';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent {
  @Input() project = {} as projetos;
}
