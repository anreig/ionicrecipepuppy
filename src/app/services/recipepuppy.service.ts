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
  CORS_HELPER: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private logger: LoggerService
  ) {
    this.API_URL = this.config.getEnv().API_URL;
    this.CORS_HELPER = this.config.getEnv().CORS_HELPER;
  }

  getOrSearchRecipes(req?): Observable<Recipe[]> {
    const options = createRequestOption(req);
    return this.http.get<any>(this.CORS_HELPER + this.API_URL, { params: options }).pipe(map((items: ApiResponse<Recipe>) => items.results),
      catchError((e, _) => {
        this.logger.error('Error searching Recipes', e);
        return [];
      })
    );
  }
}
