import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projetos } from '../_models/projetos';
import { ProjectsService } from '../_services/projects.service';//importa o serviço de projetos

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit{

  project = {} as projetos[];//




  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Busca Soluções - Projetos');
  }
  ngOnInit(): void {
    this.project = this.projectService.getProjects();//pega todos os projetos
  }
}


