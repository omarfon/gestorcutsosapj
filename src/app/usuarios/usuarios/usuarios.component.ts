import { Component, OnInit } from '@angular/core';
import { UpdataService } from './../../services/updata.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  public nombres;
  public surname1;
  public surname2;
  public email;
  public area;
  public password;
  public usuarios;
  constructor(public updateSrv: UpdataService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    this.updateSrv.getAllUsers().subscribe((data:any) => {
     this.usuarios = data.map(x => {
      const usuario = x.payload.doc.data();
      usuario.id = x.payload.doc.id;
      return usuario;
     })
      console.log(this.usuarios);
    })
  }

  saveUser(){
    let data = {
      nombres: this.nombres,
      surname1: this.surname1,
      surname2: this.surname2,
      email:this.email,
      area: this.area,
      password: this.password
    }
    this.updateSrv.saveUser(data).then(data => {
      console.log(data)
    }, err => {
      alert(err)
      console.log(err);
    })
  }

}
