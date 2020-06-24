import { Component, OnInit } from '@angular/core';
import { TurnoService } from 'src/app/services/turnoService/turno.service';
import { MascotaService } from 'src/app/services/mascotaService/mascota.service';
import { Turno } from 'src/app/models/turno';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  turno:Turno;
  listaDeTurnos:Array<Turno>;
  listaDeMascotas:Array<Mascota>;

  constructor(private turnoService:TurnoService,private mascotaService:MascotaService) {
   this.turno = new Turno();
   this.listaDeTurnos = new Array<Turno>();
   this.listaDeMascotas = new Array<Mascota>();

   this.cargarMascotas();
   this.cargarTurnos();
   }


  cargarMascotas(){
    this.listaDeMascotas = new Array<Mascota>();
    this.mascotaService.getMascotas().subscribe(
      (result)=>{
          var vmascota: Mascota = new Mascota();
          result.forEach(element => {
            Object.assign(vmascota,element);
            this.listaDeMascotas.push(vmascota);
            vmascota = new Mascota();
          });
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  borrarTurno(t:Turno){
    this.turnoService.deleteTurno(t).subscribe(
      (result)=>{
          this.cargarTurnos();
          alert("Turno Eliminado");
      }, 
    (error)=>{
          console.log("error"+ error);
    })
  }


  cargarTurnos(){
    this.listaDeTurnos = new Array<Turno>();
    this.turnoService.getTurnos().subscribe(
      (result)=>{
          var vturno: Turno = new Turno();
          result.forEach(element => {
            Object.assign(vturno,element);
            this.listaDeTurnos.push(vturno);
            vturno = new Turno();
          });
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  guardarTurno(){
    this.turnoService.addTurno(this.turno).subscribe(
    (result)=>{
        this.cargarTurnos();
        alert("Turno Guardada");
    }, 
  (error)=>{
        console.log("error"+ error);
  })
  this.turno = new Turno();
  }


  limpiarCampos(){
    this.turno = new Turno();
  }




  ngOnInit(): void {
  }

}
