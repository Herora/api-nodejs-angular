import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicios: HttpService) { }
  public data: any[] = [];

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.servicios.listar().subscribe((res: any) => {
      if (res) {
        this.data = JSON.parse(res);
      } else {
        alert('Intenta nuevamente en unos segundos');
      }
  });
  }
}
