import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    
    ) {
    this.afAuth.authState.subscribe((user) => {
      this.isLoggedInSubject.next(!!user); // Vérifie si l'utilisateur est connecté
      this.userSubject.next(user);
    });
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  getUser() {
    return this.userSubject.value;
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUserById(id: string) {

  }

  getIsLoggedIn() {
    return this.isLoggedInSubject.value;
  }
}
