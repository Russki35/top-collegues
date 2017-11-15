import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

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

  constructor(){
    
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
  this.collegues = [new Collegue("Jean-Jean", "https://www.univ-brest.fr/digitalAssets/35/35129_jeanjean.JPG", 300),
                    new Collegue("Gi-Gi", "http://images.charentelibre.fr/2017/11/14/5a0aafb77971bbaa36c52536/golden/1000x625/italie-les-tristes-adieux-de-l-immense-gianluigi-buffon.jpg", 200),
                    new Collegue("Miche-Miche", "https://s1-ssl.dmcdn.net/A00f9/526x297-cuF.jpg", 150),
                    new Collegue("Pol-Pot", "http://i.telegraph.co.uk/multimedia/archive/01381/pol_pot_1381980f.jpg", 60),
                    new Collegue("Cri-Cri", "https://www.telestar.fr/var/telestar/storage/images/2014/articles/sebastien-roch-les-mysteres-de-l-amour-cricri-d-amour-papa-pour-la-seconde-fois-!-exclusif-39523/421889-1-fre-FR/Sebastien-Roch-Les-mysteres-de-l-amour-Cricri-d-amour-papa-pour-la-seconde-fois-!-Exclusif.jpg", 250)
                   ]

    setTimeout(() => this.staticAlertClosed = true, 20000);
                   
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
    
  }

  

  
}
