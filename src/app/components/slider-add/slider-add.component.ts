import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UpdataService } from 'src/app/services/updata.service';


@Component({
  selector: 'app-slider-add',
  templateUrl: './slider-add.component.html',
  styleUrls: ['./slider-add.component.scss']
})
export class SliderAddComponent implements OnInit {
  public urlImagen;
  public porcentajeSubida;
  public titulo;
  public central;
  public final;
  public slug;
  public active: boolean = false;
  constructor(public storagefs: AngularFireStorage, public updtSrv: UpdataService) { }

  ngOnInit(): void {
  }

  upSlider(){
    let data ={
      titulo:this.titulo,
      central:this.central,
      final:this.final,
      slug:this.slug,
      image:this.urlImagen,
      active:this.active
    }
    console.log('data para slider:',data);
    this.updtSrv.saveSlider(data).then(resp => {
        console.log(resp)
        alert('slider guardado');
        this.titulo = "";
        this.central ="";
        this.final = "";
        this.slug = "";
        this.urlImagen ="";
        this.active = false;
    }).catch(err => {
      console.log(err);
      alert('error de creación')
    })
  }

  acivateSlider(event){
    this.active = true;
    this.active = !this.active;
    console.log(this.active);
  }

  validateInputs(){

  }


  upImage(event){
    const nombre = new Date().getTime().toString();
    const archivo = event.target.files[0];
    const extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'));
    const ruta = 'sliders/' + nombre + extension;
    const referencia = this.storagefs.ref(ruta)
    const tarea = referencia.put(archivo);
    tarea.then((objeto)=>{
      console.log('imagen subida');
      console.log(archivo);
      referencia.getDownloadURL().subscribe(url => {
        this.urlImagen = url;
      })
    })
    this.urlImagen = tarea.percentageChanges().subscribe((porcentaje)=>{
      console.log(porcentaje)
      this.porcentajeSubida = porcentaje;
    })
  }

}
