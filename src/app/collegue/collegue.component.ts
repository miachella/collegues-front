import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  condition: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  

  quandOnClique() {
    this.condition = !this.condition;
    }

}
