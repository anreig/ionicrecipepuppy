import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { createRequestOption } from './../common/request.util';
import { ConfigService } from './config.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class RecipepuppyService {

  API_URL: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private logger: LoggerService
  ) {
    this.API_URL = this.config.getEnv().API_URL;
  }

  getOrSearchRecipes(req?): Observable<Recipe[]> {
    const options = createRequestOption(req);
    return this.http.get<any>(this.API_URL, { params: options }).pipe(map(items => items.results),
      catchError((e, _) => {
        this.logger.error('Error searching Recipes', e);
        return [];
      })
    );
  }
}
