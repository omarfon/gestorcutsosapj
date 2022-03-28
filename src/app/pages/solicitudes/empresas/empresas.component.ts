import { Component, OnInit } from '@angular/core';
import { UpdataService } from 'src/app/services/updata.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
  public empresas;
  constructor(public updateSrv: UpdataService) { }

  ngOnInit(): void {
    this.getAllEmpresas();
  }

  getAllEmpresas(){
    this.updateSrv.getEmpresas().subscribe((data:any) => {
      this.empresas = data.map(x => {
        const reg = x.payload.doc.data();
        reg.id = x.payload.doc.id;
        return reg 
      });
      this.empresas = this.empresas.sort((a:any,b:any) => <any>new Date(a.data.fechaSolicitud) - <any>new Date(b.data.fechaSolicitud))
      console.log(this.empresas, data)
    })
  }

  activate(r){
    let data={
      active: true
    };
    const id = r.id
    console.log(data, id);
   this.updateSrv.upDateEmpresa(data, id).then(data => {
    this.getAllEmpresas();
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
