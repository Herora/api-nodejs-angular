import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsModule } from 'src/app/components/componets.module';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AccountPageModule {}
