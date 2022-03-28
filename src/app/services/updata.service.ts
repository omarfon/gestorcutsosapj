import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class UpdataService {
  public noticias;
  public nosotros;
  public notice;
  public slider;
  constructor(public afs: AngularFirestore, public authfs: AngularFireAuth) { }

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

  deleteNotice(id){
    return this.afs.collection('notices').doc(id).delete();
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

  deleteSlider(id){
    return this.afs.collection('Sliders').doc(id).delete();
  }

  getAllSlider(){
    return this.nosotros = this.afs.collection('Sliders').snapshotChanges();
  }

  ordenSlider(id, i){
    return this.afs.collection('Sliders').doc(id).set({
      data:{
        order:i
      }
    },{merge:true})
  }

  getUneteForm(){
    return this.nosotros = this.afs.collection('formUnete').snapshotChanges();
  }

  upDateUnete(data, id){
    return this.afs.collection('formUnete').doc(id).set({
      data
    },{merge:true})
  }

  geEmpresaForm(){
    return this.nosotros = this.afs.collection('formEmpresa').snapshotChanges();
  }

  upDateEmpresa(data, id){
    return this.afs.collection('formEmpresa').doc(id).set({
      data
    },{merge:true})
  }

  saveUser(data){
    return this.afs.collection('Users').doc().set({
      data
    }, {merge:true})
  }

  deleteUser(data){
    const id = data.id;
    return this.afs.collection('Users').doc(id).delete()
  }

  getDataUser(){
    const datos = JSON.parse(localStorage.getItem('log'));
    const email = datos.user.email;
    return this.afs.collection('Users', ref => ref.where('data.email', '==', email)).valueChanges()
  }

  getAllUsers(){
    return this.nosotros = this.afs.collection('Users').snapshotChanges();
  }

  getEmpresas(){
    return this.afs.collection('formEmpresa').snapshotChanges();
  }

  createCapana(data){
    return this.afs.collection('Sliders').doc().set({
      data
    },{merge:true})
  }

  createUser(email, password){
    this.authfs.createUserWithEmailAndPassword(email, password).
    then(resp => {
      return resp
    })
  }

}
