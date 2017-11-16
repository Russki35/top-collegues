export class Collegue {
  constructor(private _nom:string, private _urlImg:string, private _score:number){

  }

  get nom(){
    return this._nom
  }
  set nom(nom:string){
    this._nom = nom
  }

  get urlImg(){
    return this._urlImg
  }

  url(url:string){
    this._urlImg = url
  }


  get score(){
    return this._score
  }

  
  set score(score:number){
    this._score = score
  }

}
