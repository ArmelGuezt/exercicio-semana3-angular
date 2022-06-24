import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  titulo = "Informações do Candidado";

  produto = {
    identificacao: "10",
    nome: "Armel Guezem Titio",
    salario: "4500",
    cargo: "Dev Pleno",
  }

  constructor() {}

  ngOnInit(): void {
  }

}
