import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
  private URL = 'www.themealdb.com/api/json/v1/1/search.php?s';

  constructor() { }



}
