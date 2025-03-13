import { Component, HostBinding, OnInit } from '@angular/core';
import { ComidasService } from '../../services/comidas.service';
import { Router } from '@angular/router';
import { Comida } from '../../models/comida';

@Component({
  selector: 'app-comida-listar',
  templateUrl: './comida-listar.component.html',
  styleUrls: ['./comida-listar.component.css']
})
export class ComidaListarComponent implements OnInit {
  // comidas: any = [];
  @HostBinding('class') classes = 'row'
  comidas:Comida[]| any;

  constructor( private comidasService: ComidasService, private router: Router) { }

  ngOnInit() {
    this.getComidas();
  }

  getComidas() {
    this.comidasService.getComidas().subscribe(
      res => {
        this.comidas = res; 
      },
      // res => console.log(res),
      err => console.log(err)
    );
  }
  eliminarComida(id: string) {
    this.comidasService.deleteComida(id).subscribe(
      res => {
        console.log(res);
        //refrescar y llama a todos las comidas
        this.getComidas();
      },
      err=>console.log(err)
    )
  }
  
 

}
