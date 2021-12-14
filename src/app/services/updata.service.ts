import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdataService {
  public noticias;
  public nosotros;
  public notice;
  public slider;
  constructor(public afs: AngularFirestore) { }

  saveNotices(data){
    return this.afs.collection('notices').doc().set({
      data
    },{merge:true})
  }

  getAllNotices(){
    return this.afs.collection('notices').snapshotChanges();
  }

  saveNotice(data, id){
    return this.afs.collection('notices').doc(id).set({
      data
    },{merge:true})
  }

  saveNostros(data){
    return this.afs.collection('Nosotros').doc('1111').set({
      data
    },{merge:true})
  }

  getNosotros(){
   return this.nosotros = this.afs.collection('Nosotros').valueChanges();
  }

  saveSlider(data){
    return this.afs.collection('Sliders').doc().set({
      data
    },{merge:true})
  }

  updateSlider(data, id){
    return this.afs.collection('Sliders').doc(id).set({
      data
    },{merge:true})
  }

  getAllSlider(){
    return this.nosotros = this.afs.collection('Sliders').snapshotChanges();
  }

  getUneteForm(){

  }

  getClasesForm(){

  }

  saveUser(data){
    return this.afs.collection('Users').doc().set({
      data
    }, {merge:true})
  }

  getAllUsers(){
    return this.nosotros = this.afs.collection('Users').snapshotChanges();
  }

  getEmpresas(){
    return this.afs.collection('formEmpresa').valueChanges();
  }

}
