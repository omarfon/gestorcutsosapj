import { Component, OnInit } from '@angular/core';
import { UpdataService } from './../../services/updata.service';

@Component({
  selector: 'app-campana-add',
  templateUrl: './campana-add.component.html',
  styleUrls: ['./campana-add.component.scss']
})
export class CampanaAddComponent implements OnInit {
  public verano: boolean = false;
  public other: boolean= false;

  //DatosCampaña
  public active;
  public logo;
  public imagenCampana;
  public tituloCampana;

  public tituloUno;
  public filtroUno;
  public imagenWebUno;
  public imagenMobileUno;

  public tituloDos;
  public filtroDos;
  public imagenWebDos;
  public imagenMobileDos;

  public tituloTres;
  public filtroTres;
  public imagenWebTres;
  public imagenMobileTres;

  public tituloCuatro;
  public filtroCuatro;
  public imagenWebCuatro;
  public imagenMobileCuatro;

  public tituloCinco;
  public filtroCinco;
  public imagenWebCinco;
  public imagenMobileCinco;

  public tituloSeis;
  public filtroSeis;
  public imagenWebSeis;
  public imagenMobileSeis;

  constructor(public updatSrv: UpdataService) { }

  ngOnInit(): void {
  }

  typeVerano(){
    this.verano = true;
    this.other = false;
 /*    this.verano = !this.verano; */
  }
  typeOtherCampana(){
    this.other = true;
    this.verano = false;
   /*  this.other = !this.other; */
  }

  subirImagenWeb(event){
    console.log('imagen web',event)
  }

  subirImagenMobile(event){
    console.log(event)
  }

  acivateCampana(event){
    
  }

  salvarData(){
    let datos = {
      titulo: this.tituloCampana,
      active:false,
      imagen:this.imagenCampana,
      logo:this.logo,
      categorias:[
        {
          titulo:this.tituloUno,
          filtro:this.filtroUno,
          imagenWen:this.imagenWebUno,
          imagenMobile:this.imagenMobileUno
        },
        {
          titulo:this.tituloDos,
          filtro:this.filtroDos,
          imagenWen:this.imagenWebDos,
          imagenMobile:this.imagenMobileDos
        },
        {
          titulo:this.tituloTres,
          filtro:this.filtroTres,
          imagenWen:this.imagenWebTres,
          imagenMobile:this.imagenMobileTres
        },
        {
          titulo:this.tituloCuatro,
          filtro:this.filtroCuatro,
          imagenWen:this.imagenWebCuatro,
          imagenMobile:this.imagenMobileCuatro
        },
        {
          titulo:this.tituloCinco,
          filtro:this.filtroCinco,
          imagenWen:this.imagenWebCinco,
          imagenMobile:this.imagenMobileCinco
        },
        {
          titulo:this.tituloSeis,
          filtro:this.filtroSeis,
          imagenWen:this.imagenWebSeis,
          imagenMobile:this.imagenMobileSeis
        }
      ]
    }

    this.updatSrv.createCapana(datos).then(resp => {
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  
  }

}
