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
  this.collegues = [new Collegue("Jo-Jo", "https://orig00.deviantart.net/861e/f/2016/100/9/6/_87974594_32be803c_efcf_47ef_9a17_197106074016_by_unlimitedblankworks-d9yh993.jpg", 70000000),
                    new Collegue("Benito", "http://afflictor.com/wp-content/uploads/2014/04/mussolini123.jpg", 500000),
                    new Collegue("Mao", "https://www.herodote.net/Images/Mao.jpg", 100000000),
                    new Collegue("Pol-Pot", "http://i.telegraph.co.uk/multimedia/archive/01381/pol_pot_1381980f.jpg", 60),
                    new Collegue("Kim", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kim_Il_Sung_Portrait-2.jpg", 3000000)
                   ]

    setTimeout(() => this.staticAlertClosed = true, 20000);
  


    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
         
  }

  

  
}
