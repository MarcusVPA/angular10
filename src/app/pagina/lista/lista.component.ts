import { Component, OnInit } from '@angular/core';
import { Produto } from './../../produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  p1 = new Produto('Sardinha', 'joao@sardinhas.com', 3, 0.10, '06/11/2021');

  constructor() { }

  ngOnInit(): void {
  }

}
