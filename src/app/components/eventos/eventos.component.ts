import { Component, OnInit } from '@angular/core';
import { PhotoStudioService } from '../../services/photoStudio.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Service } from '../../models/service';


@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers:[PhotoStudioService]
})
export class EventosComponent implements OnInit {
  public identity;
  public token;
  public eventos: Service[];

  constructor(
    private _photoStudioService:PhotoStudioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
  this.identity=this._photoStudioService.getIdentity();
  this.token=this._photoStudioService.getToken();
  }

  ngOnInit(): void {
   
    this.getEventos(this.token, this.identity._id);
    
  } 


getEventos(token, id){
this._photoStudioService.getEventos(token,id).subscribe(
  response=>{
      if(response.services){
      this.eventos=response.services
      }else{
        this._router.navigate(['/home']);
      }
  },
  error=>{
   console.log(error); 
  }

);

}



}
