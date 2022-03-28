import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UpdataService } from 'src/app/services/updata.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  public contenido;
  public urlImagen;
  public dataNosotros;
  public urlBase = environment.firebase.authDomain;
  porcentajeSubida: number = 0;
  public carga : boolean = false;
  public color = "primary"
  public disabled:boolean = true;
  
  constructor(public updateSrv: UpdataService, public storagefs: AngularFireStorage) { }

  ngOnInit(): void {
    this.getAllNosotros();
  }

  getAllNosotros(){
    this.updateSrv.getNosotros().subscribe((data:any) => {
      this.dataNosotros = data[0].data;
      console.log(this.dataNosotros);
      this.urlImagen = this.dataNosotros.imagen;
    })
  }

  saveDataNosotros(){
    let data = {
      contenido:this.contenido,
      imagen: this.urlImagen
    }
        this.updateSrv.saveNostros(data).then(resp => {
          this.dataNosotros = resp;  
          Swal.fire({
            title: 'Cambiar datos Nosotros!',
            text: 'Se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Entiendo'
          }) 
        }).catch(err =>{
          alert(err)
        })
  
  }

  subirImagen(evento){
    this.carga = true;
    this.disabled = false;
    const archivo = evento.target.files[0];
    const ruta = 'nosotros/imagennosotros.png';
    const referencia = this.storagefs.ref(ruta)
    const tarea = referencia.put(archivo);
    tarea.then((objeto)=>{
      console.log('imagen subida');
      console.log(archivo);
      referencia.getDownloadURL().subscribe(url => {
        this.urlImagen = url
      })
      this.carga = false;
      this.disabled = true;
    })
    this.urlImagen = tarea.percentageChanges().subscribe((porcentaje)=>{
      console.log(porcentaje)
      this.porcentajeSubida = porcentaje;
    })
  }
}
