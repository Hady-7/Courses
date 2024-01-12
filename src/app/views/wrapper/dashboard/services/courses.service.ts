import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as fromModels from '../models';
@Injectable()
export class CoursesService {
  private dataUrl = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  getAllCourses():Observable<fromModels.ICourse[]>{
    return this.http.get<fromModels.ICourse[]>(this.dataUrl)
  }

}
