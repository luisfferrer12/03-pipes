import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Felipe';

  nombre2 = 'LuiS FeliPe FeRRer DelGadO';

  arreglo = [1,2,3,4,5,6,7,8,9,10,11];

  PI = Math.PI;

  num = 0.234;

  val = 1234.5;

  heroe = {
    nombre: 'Peter',
    clave: 'Spiderman',
    edad: '29',
    direccion: {
      calle: 'primera',
      casa: 116
    }
  };

  vlorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llegó la data!'), 3500);
  });

  fecha = new Date();

  video = "S4FtgEgBFcE"

  activar:boolean = true;
}
