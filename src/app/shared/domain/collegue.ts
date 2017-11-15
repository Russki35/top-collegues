export class Collegue {
  constructor(private _nom:string, private _urlImg:string, private _score:number){

  }

  get nom(){
    return this._nom
  }

  get urlImg(){
    return this._urlImg
  }

  get score(){
    return this._score
  }
}
