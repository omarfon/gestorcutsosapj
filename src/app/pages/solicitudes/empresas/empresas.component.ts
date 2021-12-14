import { Component, OnInit } from '@angular/core';
import { UpdataService } from 'src/app/services/updata.service';


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
    this.updateSrv.getEmpresas().subscribe(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

}
