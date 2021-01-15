import { Component, OnInit } from '@angular/core';
import { PhotoStudioService } from '../../services/photoStudio.service';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import { Guard } from '../../services/guard';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PhotoStudioService, Guard]
})
export class HomeComponent implements OnInit {
  public identity;
  public token;
  public sw:boolean

  constructor(
    private _photoStudioService:PhotoStudioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  this.identity=this._photoStudioService.getIdentity();
  this.token=this._photoStudioService.getToken();
  this.sw=false
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.identity=null;
    this.token=null;
    this._router.navigate(['/login']);
  }

  switch(){
    this.sw=!this.sw;
  }


}
