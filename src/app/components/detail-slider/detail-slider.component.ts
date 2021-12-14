import { Component, OnInit } from '@angular/core';
import { UpdataService } from 'src/app/services/updata.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detail-slider',
  templateUrl: './detail-slider.component.html',
  styleUrls: ['./detail-slider.component.scss']
})
export class DetailSliderComponent implements OnInit {
  public slider;
  public edit: boolean = false;
  public active;
  public titulo;
  public central;
  public final;
  public slug;
  constructor(public updataSrv: UpdataService, public dialogRef:MatDialogRef<DetailSliderComponent>) { }

  ngOnInit(): void {
    this.slider = this.updataSrv.slider;
    this.titulo = this.slider.data.titulo;
    this.slug = this.slider.data.slug;
    this.central = this.slider.data.central;
    this.final = this.slider.data.final;
    this.active = this.slider.data.active;
    console.log(this.slider)
  }

  activateSlider(){
    this.active = true;
  }

  editSlider(){
    this.edit = true;
  }

  saveDataSlider(){
    let data = {
      titulo:this.titulo,
      central: this.central,
      final: this.final,
      slug:this.slug,
      active: this.active
    }
    const id = this.slider.id;
    console.log(data, id);
   this.updataSrv.updateSlider(data, id).then(resp => {
    this.dialogRef.close();
     Swal.fire({
      title: 'Actualización Correcta!',
      text: 'Actualizaste correctamente este slider',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }, err => {
    Swal.fire({
      title: 'Error!',
      text: 'No se ha actualizado este Slider',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo'
    })
   })
  }

  close(){
    this.dialogRef.close();
  }
}
