import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PhotoStudioService } from './photoStudio.service';


@Injectable()
export class GuardLogin implements CanActivate{

    constructor(
      private _router: Router,
      private _photoService:PhotoStudioService  
    ){}

    canActivate(){
        let identity=this._photoService.getIdentity();
        if(identity && identity.name){
        this._router.navigate(['/home']);
        return false;
        }else{
            return true;
            
            
        }
    }

}