import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  meutitulo = "Texto atraves de uma variavel"

  texto1 = "Olá tudo bem?"

  texto2 = "Como vai?"

  Cliente = {
    id: 1,
    Nome: "Alciomar"
  }

  constructor() { }

  ngOnInit(): void {
  }

  geraTexto(){
    return "Gerar Um texto qualquer";
  }

}
