import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as fromModels from '../models';
import { map, tap } from 'rxjs/operators';
@Injectable()
export class CoursesService {
  private dataUrl = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<fromModels.ICourse[]> {
    return this.http.get<fromModels.ICourse[]>(this.dataUrl);
  }

  getOneCourse(courseId: number): Observable<fromModels.ICourse> {
    return this.http.get<fromModels.ICourse[]>(this.dataUrl).pipe(
      map((courses) => {
        const course = courses.filter((course) => course.id === courseId);
        return course[0];
      })
    );
  }
  searchCourses(searchTerm: string): Observable<fromModels.ICourse[]> {
    return this.http.get<fromModels.ICourse[]>(this.dataUrl).pipe(
      tap((data) => console.log('All courses for search:', data)),
      map((courses) => {
        if (!searchTerm || searchTerm.trim() === '') {
          return courses; // Return all courses if no search term
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return courses.filter((course) => {
          return (
            course.courseName.toLowerCase().includes(lowerCaseSearchTerm) ||
            course.author.toLowerCase().includes(lowerCaseSearchTerm) ||
            course.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
          );
        });
      }),
      tap((data) => console.log('Filtered courses for search:', data)),
    );
  }
  sortCourses(sortBy: string): Observable<fromModels.ICourse[]> {
    return this.http.get<fromModels.ICourse[]>(this.dataUrl).pipe(
      tap((data) => console.log('All courses for sort:', data)),
      map((courses) => {
        switch (sortBy) {
          case 'priceLowToHigh':
            return [...courses].sort((a, b) => a.actualPrice - b.actualPrice);
          case 'priceHighToLow':
            return [...courses].sort((a, b) => b.actualPrice - a.actualPrice);
          case 'nameAtoZ':
            return [...courses].sort((a, b) => a.courseName.localeCompare(b.courseName));
          case 'nameZtoA':
            return [...courses].sort((a, b) => b.courseName.localeCompare(a.courseName));
          default:
            return courses;
        }
      }),
      tap((data) => console.log('Sorted courses:', data)),
    );
  }
}
