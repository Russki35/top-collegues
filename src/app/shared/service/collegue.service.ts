import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CollegueService {

  collegues:Collegue[] = [new Collegue("Jo-Jo", "https://orig00.deviantart.net/861e/f/2016/100/9/6/_87974594_32be803c_efcf_47ef_9a17_197106074016_by_unlimitedblankworks-d9yh993.jpg", 70000000),
  new Collegue("Benito", "http://afflictor.com/wp-content/uploads/2014/04/mussolini123.jpg", 500000),
  new Collegue("Mao", "https://www.herodote.net/Images/Mao.jpg", 100000000),
  new Collegue("Pol-Pot", "http://i.telegraph.co.uk/multimedia/archive/01381/pol_pot_1381980f.jpg", 3000000),
  new Collegue("Kim", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kim_Il_Sung_Portrait-2.jpg", 3000000)
 ]

  

  constructor(private http:HttpClient) { }

    listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    return this.http.get<Collegue[]>(`${environment.apiUrl}/collegues`).toPromise()
    

    }
    // TODO retourner l'objet Promise<Collegue[]>
    
    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
    return this.http.post<Collegue>(`${environment.apiUrl}/collegues`, newCollegue, httpOptions ).toPromise()
    
    // TODO retourner l'objet Promise<Collegue[]>
    }
    aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Aimer un collègue
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}/score`, {"avis" : "jaime"}, httpOptions).toPromise()
    //return this.changerScore(unCollegue, 10)
    }
    detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Aimer un collègue
    return this.http.put<Collegue>(`${environment.apiUrl}/collegues/${unCollegue.nom}/score`, {"avis" : "jedeteste"}, httpOptions).toPromise()
    //return this.changerScore(unCollegue, -5)
    }

    changerScore(unCollegue: Collegue, score: number): Promise<Collegue> {
      let index: number = this.collegues.findIndex(collegue => collegue.nom == unCollegue.nom)
  
      this.collegues[index].score += score
  
      return new Promise((resolve, reject) => {
        resolve(this.collegues[index])
      })
    }
  
    supprimer(collegue: Collegue) {
      this.collegues = this.collegues.filter(col => col.nom != collegue.nom)
    }

  }
