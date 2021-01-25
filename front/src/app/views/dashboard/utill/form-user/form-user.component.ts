import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  @Input() public header: string;
  @Output() public resultForm = new EventEmitter<any>();
  constructor() { }

  public user: FormGroup;
  public generos = [{value: 'Masculino', label: 'Masculino'}, {value: 'Femenino', label: 'Femenino'}];
  public sede = [{value: 'Ruta N', label: 'Ruta N'}, {value: 'Puerto Seco', label: 'Puerto Seco'}, {value: 'Buro', label: 'Buro'}];

  ngOnInit(): void {
    this.user = new FormGroup({
      nombre: new FormControl(''),
      cedula: new FormControl(''),
      telefono: new FormControl(''),
      fech_naci: new FormControl(''),
      genero: new FormControl(''),
      cliente: new FormControl(''),
      sede: new FormControl(''),
      edad: new FormControl(''),
    });
  }

  public send(){
    this.valdiateEdad();
    // console.log(this.user.value);
    this.resultForm.emit(this.user.value);
  }

  valdiateEdad() {
    const age = this.user.get('fech_naci').value;
    const convertAge = new Date(age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    const showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.user.get('edad').setValue(showAge);
  }

}
