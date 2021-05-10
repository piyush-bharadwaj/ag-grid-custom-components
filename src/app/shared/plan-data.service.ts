import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Plan } from "./plan"

@Injectable({
  providedIn: "root"
})
export class PlanDataService {
  constructor(private httpClient :HttpClient) {}
 
  getOpPlans(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>('assets/plan-data.json')
      .pipe(
        tap(_ => console.log('fetched plan date'))
        )      
  }
}
