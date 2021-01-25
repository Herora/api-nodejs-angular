import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  public header = 'Registrar nuevo usuario';
  constructor(private router: Router, private servicios: HttpService) { }

  ngOnInit(): void {
  }

  createUser(event: any): void {
    const data = event;
    this.servicios.register(data).subscribe((res: any) => {
      if (res) {
        if (res === 'registro exitoso') {
          alert('registro exitoso');
          this.router.navigate(['/dashboard/listar']);
      } else {
        alert('Intenta nuevamente en unos segundos');
      }
    }
  });
  }
}
