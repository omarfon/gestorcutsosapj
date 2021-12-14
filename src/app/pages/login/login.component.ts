import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string
  public textError;
  constructor(public router: Router,
              public authfs: AngularFireAuth) { }

  ngOnInit(): void {
  }


  sigNiWithEmailPassword(){
    console.log(this.email, this.password)
    this.authfs.signInWithEmailAndPassword(this.email, this.password).then(res =>{
      localStorage.setItem('log', JSON.stringify(res));
      this.router.navigate(['home'])
    }).catch(err =>{
      console.error(err);
      this.textError = err;
      alert(err)
    })
  }

  
}
