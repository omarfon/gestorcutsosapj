import { Component, OnInit } from '@angular/core';
import { UpdataService } from './../../services/updata.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-noticias-add',
  templateUrl: './noticias-add.component.html',
  styleUrls: ['./noticias-add.component.scss']
})
export class NoticiasAddComponent implements OnInit {
  public title: string= "";
  public slug: string = "";
  public image: string = "";
  public resumen: string = "";
  public contenido: string = "";
  public date: string = "";
  public datepublic: string = "";
  public reading: string = "";
  public imagereading: string = "";
  public active: boolean = false;
  public home: boolean = false;
  public urlImagen;
  public porcentajeSubida:number = 0;
  public guardado: boolean = false;
  public errorguardado: boolean = false;
  public resumencontador = 0;

  editor: Editor;
  html: '';
  constructor(public afsSrv:UpdataService, public storagefs: AngularFireStorage) { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveNotice(){
    let data ={
      title : this.title,
      slug : this.slug,
      image: this.image,
      resumen: this.resumen,
      contenido:this.contenido,
      date: this.date,
      datepublic: this.datepublic,
      reading: this.reading,
      imagereading: this.imagereading,
      active:this.active,
      home: this.home,
      imagen:this.urlImagen
    }
    console.log(data);
    this.afsSrv.saveNotices(data).then(res =>{
      console.log(res);
      this.guardado = true;
      this.title = "";
      this.slug = "";
      this.resumen = "";
      this.contenido = "";
      this.date = "";
      this.datepublic = "";
      this.reading = "";
      this.active = false;
      this.home = false;
      this.image = "";
    }).catch(err =>{
      alert(err)
      this.errorguardado = true;
    })
  }

  fullCampos():boolean{
    if(this.title,this.slug,this.resumen,this.contenido,this.date){
      return false
    }else{
      return true
    }
  }

  upImage(event){
    const nombre = new Date().getTime().toString();
    const archivo = event.target.files[0];
    const extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'));
    const ruta = 'noticias/' + nombre + extension;
    const referencia = this.storagefs.ref(ruta)
    const tarea = referencia.put(archivo);
    tarea.then((objeto)=>{
      console.log('imagen subida');
      console.log(archivo);
      referencia.getDownloadURL().subscribe(url => {
        this.urlImagen = url;
      })
    })
    this.urlImagen = tarea.percentageChanges().subscribe((porcentaje)=>{
      console.log(porcentaje)
      this.porcentajeSubida = porcentaje;
    })
  }

  homeChange(event){
    console.log(event);
    this.home = true;
    this.home = !this.home;
  }

  activeChange(event){
    console.log(event);
    this.active = true;
    this.active = !this.active;
  }
  
  onresumen(event){
    this.resumencontador = event.target.value.length;
  }

}
