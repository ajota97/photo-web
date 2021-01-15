import { Component, OnInit } from '@angular/core';
import { PhotoStudio } from '../../models/photoStudio';
import { PhotoStudioService } from '../../services/photoStudio.service';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PhotoStudioService]
})
export class LoginComponent implements OnInit {
 
  public photoStudio:PhotoStudio;
  public identity;
  public token;

  constructor(
    private _photoStudioService:PhotoStudioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.photoStudio=new PhotoStudio('','','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._photoStudioService.signup(this.photoStudio).subscribe(
      response=>{
          if(response.photoStudio && response.photoStudio._id){
            this.identity=response.photoStudio;
            localStorage.setItem('identity', JSON.stringify(this.identity));
            this.token=response.token;
            localStorage.setItem('token', this.token);
            
            this._router.navigate(['/home']);
          }else{
            //this.status='error';
            console.log(response.err);
          
          }
      },
      err=>{
       
       // this.status='error';
       console.log(err.error.err.message);
       
      }
    );
  }

}
