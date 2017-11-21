import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
//import { ClasseMereNavBar } from '../shared/classe-mere-navBar';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  public limit: number
  public filtre: string

  constructor(public colServ: CollegueService) {
    
    this.limit = 5
  }
  onKeyUp($event) {
    this.limit = $event.target.value
  }
  filtrer($event) {
   this.filtre = $event.target.value
  }

  ngOnInit(){
    
  }
}