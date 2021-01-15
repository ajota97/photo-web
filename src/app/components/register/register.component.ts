import { Component, OnInit } from '@angular/core';
import { PhotoStudio } from '../../models/photoStudio';
import { PhotoStudioService } from '../../services/photoStudio.service';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[PhotoStudioService]
})
export class RegisterComponent implements OnInit {
public photoStudio:PhotoStudio;


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
    this._photoStudioService.register(this.photoStudio).subscribe(
      response=>{
        if(response.photoStudio && response.photoStudio._id){
            //this.status='success';
            this._router.navigate(['/login']);
            console.log(response);
        }else{
          //this.status='error';
        }
      },
      error=>{
        //this.status='error';
        //this.error=error.error.err.message;
        console.log(error.error.err.message);
        
      }
    );
  }

}
