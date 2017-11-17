import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 // TODO Ajouter un champ collegues qui est de type Tableau de Collegue
 collegues: Collegue[]
 private _success = new Subject<string>()
 successMessage: string

 staticAlertClosed = false

  constructor(private _collegueService: CollegueService){
    
  }

  add(pseudo:HTMLInputElement, ImageUrl: HTMLInputElement){
    this.collegues.push(new Collegue(pseudo.value, ImageUrl.value, 0))
    this._success.next(`Le collègue ${pseudo.value} a été ajouté avec succès`)
    pseudo.value = " ";
    ImageUrl.value= " ";
    
    return false;   
  }

  

 ngOnInit() {
  // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores variés
  this._collegueService.listerCollegues()
  .then(data => { return this.collegues = data })
  .catch(exception => console.log(exception))

  setTimeout(() => this.staticAlertClosed = true, 20000);
  


    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
         
  }

  

  
}
