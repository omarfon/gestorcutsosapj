import { Component, OnInit } from '@angular/core';
import { UpdataService } from 'src/app/services/updata.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailSliderComponent } from './../detail-slider/detail-slider.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent implements OnInit {
  public sliders;
  constructor(public updateSrv: UpdataService,
              public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getAllSliders();
  }

  getAllSliders(){
    this.updateSrv.getAllSlider().subscribe((data:any) => {
      this.sliders = data.map(x => {
        const slid = x.payload.doc.data();
        slid.id = x.payload.doc.id;
        return slid 
      });
      console.log(data)
    })
  }

openDetailSlider(slider){
  this.updateSrv.slider = slider;
  this.dialog.open(DetailSliderComponent);
  }

  activate(slider){
    let data={
      active: true
    };
    const id = slider.id
    console.log(data, id);
   this.updateSrv.updateSlider(data, id).then(data => {
    this.getAllSliders();
     Swal.fire({
      title: 'Actualización Correcta!',
      text: 'Actualizaste correctamente este Slider',
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

  desactivate(slider){
    let data={
      active: false
    };
    const id = slider.id
    console.log(data, id);
   this.updateSrv.updateSlider(data, id).then(data => {
    this.getAllSliders();
     Swal.fire({
      title: 'Actualización Correcta!',
      text: 'Actualizaste correctamente esta noticia',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }, err => {
    Swal.fire({
      title: 'Error!',
      text: 'No se ha actualizado este slider',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo'
    })
   })
  }

  eliminateNotice(slider){
    let id = slider.id;
    console.log(id, slider);
    /* this.updateSrv.deleteSlider(id) */
  }

}
