import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // private userSubject: BehaviorSubject<any>;
  // public user: Observable<any>;

  baseUrl='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  signUp(params:any):Observable<any>
  {
    return this.http.post<any>(this.baseUrl+'signUp',params);
  }
//   public get userValue(): any {
//     return this.userSubject.value;
// }
  login():Observable<any>
  {
    return this.http.get<any>(this.baseUrl+'signUp')
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      //localStorage.setItem('user', JSON.stringify(user));
    //  this.userSubject.next(user);
     // return user;
 
  }
  getquestionlist()
  {
return this.http.get<any>(this.baseUrl+'questions')
  }
  getShuffleQuestionList()
  {
    return this.http.get<any>(this.baseUrl+'shuffleQuestions')
  }
}
