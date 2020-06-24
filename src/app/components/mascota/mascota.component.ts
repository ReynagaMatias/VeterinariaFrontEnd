import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascotaService/mascota.service';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
mascota:Mascota;
listaMascotas: Array<Mascota>;

  constructor(private mascotaService:MascotaService) {
   this.mascota = new Mascota();
   this.listaMascotas = Array<Mascota>();
   this.listaDeMascotas();
   }

  guardarMascota(){
    console.log("metodo guardar mascota");
   this.mascotaService.addMascota(this.mascota).subscribe(
    (result)=>{
       alert("Mascota Guardado");
       this.listaDeMascotas();
    }, 
  (error)=>{
       console.log("error"+ error);
  });
  
  this.mascota = new Mascota();
}


listaDeMascotas(){
  this.listaMascotas = new Array<Mascota>();
  this.mascotaService.getMascotas().subscribe(
    (result)=>{
      var masc: Mascota = new Mascota();
      result.forEach(element => {
        Object.assign(masc,element);
        this.listaMascotas.push(masc);
        masc = new Mascota();
        });
    },
    (error)=>{
      console.log(error);
    }
  )
}

borrarMascota(mascota:Mascota){  
  this.mascotaService.deleteMascota(mascota).subscribe(
    (result)=>{
      alert("Mascota Eliminada");
      this.listaDeMascotas();
    },
    (error)=>{
      console.log(error);
    }
  );
}


modificarMascota(){
  console.log("entro al metodo modificar");
  this.mascotaService.updateMascota(this.mascota).subscribe(
    (result)=>{
        alert("Mascota Modificado");
        this.listaDeMascotas();
    },
    (error)=>{
      console.log(error);
    }
  );
this.mascota = new Mascota();
}


seleccionarMascota(mascota:Mascota){
  var tmascota = new Mascota();
  Object.assign(tmascota,mascota);
  this.mascota = tmascota;
}

limpiar(){
  this.mascota = new Mascota();
}
  ngOnInit(): void {
  }

}
