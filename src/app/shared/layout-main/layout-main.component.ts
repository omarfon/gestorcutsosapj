import { Component, OnInit } from '@angular/core';
import { UpdataService } from 'src/app/services/updata.service';


@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {
  public dataUser;
  constructor(public updateSrv: UpdataService) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser(){
    this.updateSrv.getDataUser().subscribe(data => {
        this.dataUser = data;
        console.log(this.dataUser);
    })
  }
}
