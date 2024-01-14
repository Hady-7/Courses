import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as fromModels from '../models';
import { map, tap } from 'rxjs/operators';
@Injectable()
export class CourseService {
  private dataUrl = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  getOneCourse(courseId: number): Observable<fromModels.ICourse> {
    return this.http.get<fromModels.ICourse[]>(this.dataUrl).pipe(
      map((courses) => {
        const course = courses.filter((course) => course.id === courseId);
        return course[0];
      })
    );
  }
}
