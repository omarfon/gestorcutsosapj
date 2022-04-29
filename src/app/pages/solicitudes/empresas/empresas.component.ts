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
      const empresas = data.map(x => {
        const reg = x.payload.doc.data();
        reg.id = x.payload.doc.id;
        return reg 
      });
      console.log('empresas:',empresas)
      this.empresas = empresas.sort((a:any,b:any) => (b.data.fechaSolicitud) - (a.data.fechaSolicitud))
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
