import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from 'src/app/models/Collegue';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-presentation-collegue',
  templateUrl: './presentation-collegue.component.html',
  styleUrls: ['./presentation-collegue.component.css']
})
export class PresentationCollegueComponent implements OnInit {

  matCollegue: string;
  col: Collegue;

  constructor(private activatedRoute: ActivatedRoute, private dataSrv: DataService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.matCollegue = params.get('mat')
    });
    this.dataSrv.publierCol(this.matCollegue).subscribe(() => { });
    this.dataSrv.recupererCollegueCourant().subscribe(colSelect => this.col = colSelect);
  }

}
