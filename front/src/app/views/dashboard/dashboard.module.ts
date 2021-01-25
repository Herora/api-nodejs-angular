import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponetsModule } from 'src/app/components/componets.module';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DashboardComponent } from './dashboard.component';
import { FormUserComponent } from './utill/form-user/form-user.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    RouterModule,
    ComponetsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    RegistrarComponent,
    ListarComponent,
    DashboardComponent,
    FormUserComponent
  ]
})
export class DashboardPageModule {}
