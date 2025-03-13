import { Component, HostBinding, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ActivatedRoute, Router } from '@angular/router';
import { ComidasService } from '../../services/comidas.service';

@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.css']
})
export class ComidaFormComponent implements OnInit {
  
  @HostBinding('class') classes = "row";
  comida: Comida = {
    _id: '',
    titulo: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    imagen: ''
    };
  // form por defecto en falso, el edit esta falso yo quiero guardar ; edit en true quiere editar 
  edit: boolean = false;

  constructor( private comidasService: ComidasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;
    console.log('obtenido : ', params);
    
    if (params['_id']) {
      this.comidasService.getComida(params['_id'])
        .subscribe(
          res => {
            console.log(res);
            this.comida = res;
            for (let comida of this.comida[Symbol.iterator]()){
              this.comida = comida;
            }
            this.edit = true;
          },
          err=>console.error(err)
      )
    }

  }
  updateComida() {
    delete this.comida._id;

    this.comidasService.updateComida(this.comida._id, this.comida)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/comidas']);
        },
        err => console.error(err)
      )
    
  }
  guardarComida() {
    delete this.comida._id;
    this.comidasService.saveComida(this.comida)
      .subscribe(
        res => {
          console.log(res);
          //para que nos lleve al inicio 
          this.router.navigate(['/comidas']);
        },
        err => console.error(err)
    )
  }
  

}
