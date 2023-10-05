import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { projetos } from '../_models/projetos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as projetos;//pega o projeto em destaque
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Busca Soluções - Home');//muda o titulo da pagina
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}

