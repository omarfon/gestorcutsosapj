import { Component, OnInit } from '@angular/core';
import { UpdataService } from './../../../services/updata.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent implements OnInit {
  public registros;
  constructor(public updateSrv: UpdataService) { }

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros(){
    this.updateSrv.getUneteForm().subscribe((data:any) => {
      this.registros = data.map(x => {
        const reg = x.payload.doc.data();
        reg.id = x.payload.doc.id;
        return reg 
      });
      console.log(this.registros)
    })
  }

  activate(r){
    let data={
      active: true
    };
    const id = r.id
    console.log(data, id);
   this.updateSrv.upDateUnete(data, id).then(data => {
    this.getRegistros();
     Swal.fire({
      title: 'Actualización Correcta!',
      text: 'Actualizaste correctamente esta Solicitud',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }, err => {
    Swal.fire({
      title: 'Error!',
      text: 'No se ha actualizado esta Solicitud',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo'
    })
   })
  }

}
