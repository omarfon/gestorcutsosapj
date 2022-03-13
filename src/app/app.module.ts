import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavComponent } from './shared/nav/nav.component';
import { NoticiasAddComponent } from './components/noticias-add/noticias-add.component';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { LayoutMainComponent } from './shared/layout-main/layout-main.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderListComponent } from './components/slider-list/slider-list.component';
import { SliderAddComponent } from './components/slider-add/slider-add.component';
import { UneteComponent } from './pages/solicitudes/unete/unete.component';
import { EmpresasComponent } from './pages/solicitudes/empresas/empresas.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AccesosComponent } from './usuarios/accesos/accesos.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { NoticiaDetailComponent } from './componentes/noticia-detail/noticia-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { EscritoresComponent } from './usuarios/escritores/escritores.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DetailSliderComponent } from './components/detail-slider/detail-slider.component';
import { CampanaAddComponent } from './components/campana-add/campana-add.component';
import { ListComponent } from './components/list/list.component';
import { CampanaListComponent } from './components/campana-list/campana-list.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    NavComponent,
    NoticiasAddComponent,
    NoticiasListComponent,
    LayoutMainComponent,
    NosotrosComponent,
    SliderListComponent,
    SliderAddComponent,
    UneteComponent,
    EmpresasComponent,
    LoginComponent,
    AccesosComponent,
    UsuariosComponent,
    NoticiaDetailComponent,
    EscritoresComponent,
    DetailSliderComponent,
    CampanaAddComponent,
    ListComponent,
    CampanaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    AngularEditorModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    NoticiaDetailComponent,
    DetailSliderComponent
  ]
})
export class AppModule { }
