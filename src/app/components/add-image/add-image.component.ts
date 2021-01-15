import { Component, OnInit } from '@angular/core';
import { PhotoStudioService } from '../../services/photoStudio.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Image } from '../../models/image';
import { global } from '../../services/global';



@Component({
  selector: 'add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
  providers:[PhotoStudioService]
})
export class AddImageComponent implements OnInit {
  public idService;
  public identity;
  public token;
  public imagesUrl:Image[]


  constructor(
    private _photoStudioService:PhotoStudioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.identity=this._photoStudioService.getIdentity();
    this.token=this._photoStudioService.getToken();
  
   }

  ngOnInit(): void {
  this.getImageUrl();
 
  }

  getIdService(){
    this._route.params.subscribe(params=>{
   this.idService=params['id'];
   return this.idService; 
    
      });
      
  }

  getImageUrl(){
    //Sacar el id del post de la styleUrls
    this._route.params.subscribe(params=>{
      let id=params['id']; 
  
    //Peticion ajax para sacar los datos
    this._photoStudioService.getImageUrl(id).subscribe(
      response=>{ 
        if(response.imageUrl ){ 
          this.imagesUrl=response.imageUrl;
          console.log(this.imagesUrl);
        }else{
          this._router.navigate(['/home']);
        }
      },
      error=>{
        this._router.navigate(['/home']);
        console.log(error);
      }
      );
      
    
    });
    
  }





}
