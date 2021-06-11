import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 10';
  nome = '';
  vetor = [
    'Tv',
    'Cadeira',
    'Sofá',
    'Mesa',
    'Celular'
  ];
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome = '';
  }
  remover(id:number){
    this.vetor.splice(id,1);
  }
}
