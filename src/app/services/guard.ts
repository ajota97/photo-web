import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PhotoStudioService } from './photoStudio.service';


@Injectable()
export class Guard implements CanActivate{

    constructor(
      private _router: Router,
      private _photoService:PhotoStudioService  
    ){}

    canActivate(){
        let identity=this._photoService.getIdentity();
        if(identity && identity.name){
        return true;
        }else{
            this._router.navigate(['/login']);
            return false;
        }
    }

}