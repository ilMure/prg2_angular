import { Component } from '@angular/core';
import { Person } from "../../model/person";
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})

export class TabellaComponent {
  displayedColumns: string[] = ['name', 'surname', 'age'];

  listaPersone: Person[] = [ 
  {name: "Marco", surname: "Rossi", age: 41},
  {name: "Giulio", surname: "Verdi", age: 14}
]
  dataSource = this.listaPersone;
}
