import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdataService } from 'src/app/services/updata.service';
import Swal from 'sweetalert2'
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.scss']
})

export class NoticiaDetailComponent implements OnInit {

  public notice;
  public edit: boolean = false;
  public title;
  public slug;
  public resumen;
  public reading;
  public datepublic;
  public contenido;
  public active: boolean = false;
  public resumencontador = 0;
  constructor(public updateSrv: UpdataService, public dialogRef: MatDialogRef<NoticiaDetailComponent>) {
    
   }

  ngOnInit(): void {
    this.notice = this.updateSrv.notice;
    this.title = this.notice.data.title;
    this.slug = this.notice.data.slug;
    this.resumen = this.notice.data.resumen;
    this.reading = this.notice.data.reading;
    this.datepublic = this.notice.data.datepublic;
    this.active = this.notice.data.active;
    this.contenido = this.notice.data.contenido;
    this.resumencontador = this.notice.data.resumen.length;
    console.log(this.notice);
  }

  editNotice(){
    this.edit = true;
  }

  activateNotice(){
    this.active = true;
  }

  saveDataNotice(){
    let data={
      title:this.title,
      slug:this.slug,
      resumen: this.resumen,
      reading:this.reading,
      datepublic:this.datepublic,
      active:this.active
    };
    const id = this.notice.id
    console.log(data, id);
   this.updateSrv.saveNotice(data, id).then(data => {
     this.dialogRef.close();
     Swal.fire({
      title: 'Actualización Correcta!',
      text: 'Actualizaste correctamente esta noticia',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }, err => {
    Swal.fire({
      title: 'Error!',
      text: 'No se ha actualizado esta noticia',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo'
    })
   })
  }

  close(){
    this.dialogRef.close();
  }

  onresumen(event){
    this.resumencontador = event.target.value.length;
  }

}
