import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { BehaviorSubject, Observable, map } from 'rxjs';

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
    private router: Router,
    private firestore: AngularFirestore,
    private localStorage: Storage
    ) {
    this.afAuth.authState.subscribe((user) => {
    });
  }

  getUserById(id: any): Observable<any> {
    return this.firestore.collection('utilisateurs').doc(id).valueChanges().pipe(
      map((userData: any) => {
        return userData;
      })
    );
  }


  setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  async getUser() {
    this.localStorage.create();
    return JSON.parse(await this.localStorage.get('user'));
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }

  async signInWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives us a Google Access Token. We can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.getUserById(user.uid).subscribe((data) => {
          localStorage.setItem('user', JSON.stringify(data))
        });
        this.router.navigate(['/tabs/tab1'])
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });  }

  getIsLoggedIn() {
    return this.isLoggedInSubject.value;
  }
}
