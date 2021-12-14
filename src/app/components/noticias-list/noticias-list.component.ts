import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdataService } from './../../services/updata.service';
import { NoticiaDetailComponent } from './../../componentes/noticia-detail/noticia-detail.component';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  public notices;
  constructor(public updateSrv: UpdataService, 
              public dialog: MatDialog) {
                this.getAllNotices();
               }

  ngOnInit(){
    
  }

  getAllNotices(){
    this.updateSrv.getAllNotices().subscribe((data:any) =>{
      this.notices = data.map(x => {
        const notice = x.payload.doc.data();
        notice.id = x.payload.doc.id;
        return notice;
      });
      console.log('todas las noticias:',this.notices);
    }, err => {
      alert(err)
    })
  }

  openDetailNotice(notice){
    this.updateSrv.notice = notice;
    console.log(notice)
    this.dialog.open(NoticiaDetailComponent)
  }

  activate(notice){
    let data={
      active: true
    };
    const id = notice.id
    console.log(data, id);
   this.updateSrv.saveNotice(data, id).then(data => {
    this.getAllNotices();
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

  desactivate(notice){
    let data={
      active: false
    };
    const id = notice.id
    console.log(data, id);
   this.updateSrv.saveNotice(data, id).then(data => {
    this.getAllNotices();
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

}
