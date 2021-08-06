import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Prizes } from "../interfaces/prizes";




@Injectable()
export class VynilsPrizesService {
  private vinylsPrizesUrl = "https://molano-vinyl.herokuapp.com/prizes";
  constructor(private http: HttpClient) {

  }
  getVynilsPrizes(): Observable<Prizes[]> {
    return this.http.get<Prizes[]>(this.vinylsPrizesUrl);
  }
  getVynil(prizeId:number): Observable<Prizes> {
    console.log("Este es el prize id que recibe", prizeId)
    return this.http.get<Prizes>(this.vinylsPrizesUrl+`/${prizeId}`)
  }
}