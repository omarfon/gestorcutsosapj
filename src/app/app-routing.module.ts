import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutMainComponent } from './shared/layout-main/layout-main.component';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasAddComponent } from './components/noticias-add/noticias-add.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderListComponent } from './components/slider-list/slider-list.component';
import { SliderAddComponent } from './components/slider-add/slider-add.component';
import { UneteComponent } from './pages/solicitudes/unete/unete.component';
import { EmpresasComponent } from './pages/solicitudes/empresas/empresas.component';
import { LoginComponent } from './pages/login/login.component';
import { AccesosComponent } from './usuarios/accesos/accesos.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { EscritoresComponent } from './usuarios/escritores/escritores.component';
import { CampanaListComponent } from './components/campana-list/campana-list.component';
import { CampanaAddComponent } from './components/campana-add/campana-add.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: HomeComponent
      }
    ]
  },
  {
    path: 'noticias-listar',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: NoticiasListComponent
      }
    ]
  },
  {
    path: 'noticias-add',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: NoticiasAddComponent
      }
    ]
  },
  {
    path: 'nosotros',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: NosotrosComponent
      }
    ]
  },
  {
    path: 'slider-listar',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: SliderListComponent
      }
    ]
  },
  {
    path: 'campana-add',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: CampanaAddComponent
      }
    ]
  },
  {
    path: 'campana-list',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: CampanaListComponent
      }
    ]
  },
  {
    path: 'slider-add',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: SliderAddComponent
      }
    ]
  },
  {
    path: 'unete',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: UneteComponent
      }
    ]
  },
  {
    path: 'empresas',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: EmpresasComponent
      }
    ]
  },
  {
    path: 'accesos',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: AccesosComponent
      }
    ]
  },
  {
    path: 'usuarios',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: UsuariosComponent
      }
    ]
  },
  {
    path: 'escritores',
    component: LayoutMainComponent,
    children: [
      {
        path: '', component: EscritoresComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
