import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { ActivatedRoute, Router } from '@angular/router';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  col: Collegue
  constructor(public colServ: CollegueService, public route: ActivatedRoute) {

  }

  ngOnInit() {
    
  }

  jaime() {
    this.colServ.aimerUnCollegue(this.col).then(col => { this.col = col })
  }

  jeDeteste() {
    this.colServ.detesterUnCollegue(this.col).then(col => { this.col = col })
  }

  retour(){
    history.back()
  }


}
