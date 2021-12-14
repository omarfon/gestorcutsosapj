import { Component, OnInit } from '@angular/core';
import { UpdataService } from 'src/app/services/updata.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailSliderComponent } from './../detail-slider/detail-slider.component';


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

}
