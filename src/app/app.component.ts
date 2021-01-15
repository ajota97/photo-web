import { Component, DoCheck } from '@angular/core';
import { PhotoStudioService } from './services/photoStudio.service';
import {Router, ActivatedRoute, Params} from '@angular/router'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PhotoStudioService]
})
export class AppComponent {//implements DoCheck{
  public identity;
  public token;


  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _photoStudioService:PhotoStudioService
  ) { 
    this.identity=this._photoStudioService.getIdentity();
  this.token=this._photoStudioService.getToken();
  }
ngDoCheck(){
  this.identity=this._photoStudioService.getIdentity();
}

logout(){
  localStorage.clear();
  this.identity=null;
  this.token=null;
  this._router.navigate(['/login']);
}

}


