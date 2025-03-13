import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidaListarComponent } from './Components/comida-listar/comida-listar.component';
import { ComidaFormComponent } from './Components/comida-form/comida-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/comidas',
    pathMatch: 'full'
  },
  {
    path: 'comidas',
    component:ComidaListarComponent
  },
  {
    path: 'comidas/agregar',
    component: ComidaFormComponent
  },
  {
    path: 'comidas/edit/:id',
    component:ComidaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
