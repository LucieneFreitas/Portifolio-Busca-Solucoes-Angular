import { projetos } from './../_models/projetos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  project: projetos[] = [
    {id: 0, name: 'Rede Residencial', summary: 'Redes em residências', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia quam vero qui assumenda fugit! Corporis minima consectetur deserunt, error iusto maxime fuga labore aut eos alias temporibus repellat nihil!', projetoLink: '//www.google.com.br', pictures: []},

    {id: 1, name: 'Rede Comercial', summary: 'Redes em prédios comerciais', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia quam vero qui assumenda fugit! Corporis minima consectetur deserunt, error iusto maxime fuga labore aut eos alias temporibus repellat nihil!', projetoLink: '//www.google.com.br', pictures: []},

    {id: 2, name: 'Gesso 3D', summary: 'Gesso 3D em salas comerciais e residenciais', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia quam vero qui assumenda fugit! Corporis minima consectetur deserunt, error iusto maxime fuga labore aut eos alias temporibus repellat nihil!', projetoLink: '//www.google.com.br', pictures: []},

    {id: 3, name: 'Drywall', summary: 'Drywall em armario cozinha e quartos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia quam vero qui assumenda fugit! Corporis minima consectetur deserunt, error iusto maxime fuga labore aut eos alias temporibus repellat nihil!', projetoLink: '//www.google.com.br', pictures: []},

    {id: 4, name: 'EPI', summary: 'Equipamentos de segurança', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia quam vero qui assumenda fugit! Corporis minima consectetur deserunt, error iusto maxime fuga labore aut eos alias temporibus repellat nihil!', projetoLink: '//www.google.com.br', pictures: []},

    {id: 5, name: 'Consultoria', summary: 'Treinamentos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia quam vero qui assumenda fugit! Corporis minima consectetur deserunt, error iusto maxime fuga labore aut eos alias temporibus repellat nihil!', projetoLink: '//www.google.com.br', pictures: []},
];
  projetos: any;

  constructor() { }

  GetProjects(){//retorna todos os projetos
    return this.projetos;
  }

  GetProjectById(id: number) : projetos {//retorna um projeto específico
    let project = this.projetos.find((project: { id: number; }) => project.id === id);//procura o projeto pelo id

    if(project === undefined){//
      throw new TypeError('Projeto não encontrado');//
    }

    return project;//
  }
}

