import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Image } from '../../models/image';


@Component({
  selector: 'app-subir-imagenes',
  templateUrl: './subir-imagenes.component.html',
  styleUrls: ['./subir-imagenes.component.css']
})
export class SubirImagenesComponent implements OnInit {
  multipleImages = [];
  images;
  public price:number;
  public image:Image;

  constructor(
    private http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.image=new Image('','',false,0);
   }

  ngOnInit(): void {
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }


  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }


  onMultipleSubmit(){

   
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('file0', img);
    }

    this.http.post<any>(global.url+'upload/image/' + this._route.snapshot.paramMap.get('id')+'/'+this.image.price, formData).subscribe(
      (res) => this._router.navigate(['/add/image',this._route.snapshot.paramMap.get('id')]),
      (err) => console.log(err)
    );
  }

  

}
