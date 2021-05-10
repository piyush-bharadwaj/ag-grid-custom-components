import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PlanDataService {
  constructor(private httpClient :HttpClient) {}
 
  getOpPlans(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/plan-data.json')
      .pipe(
        tap(_ => console.log('fetched heroes'))
        )      
  }
}
