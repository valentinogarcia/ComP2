import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {
  currentTag:any={"nombre":"","finales":[],"subdivisiones":[]};
  /*
      this.currentTag.nombre=""
    this.currentTag.finales=[]
    this.currentTag.subdivisiones=[{"nombre":"pepe","finales":[],"subdivisiones":[]}]
  */
  subdivision:string="";
  nombre:string="";
  subdivisiones:string[]=[];
  final:string="";
  finales:string[]=[];
  constructor(
    private api:ApiService
  ){}
  AddSubdivision(){
    console.log(this.subdivision);
    this.currentTag.subdivisiones.push({"nombre":this.subdivision,"subdivisiones":[],"finales":[]})
  }
  AddFinal(){
    console.log(this.final);
    this.currentTag.finales.push({"nombre":this.final,"img":"/","descripcion":"ihateprusy"});    
  }
  ngOnInit(){
  }
  Submit(){
    this.currentTag.nombre=this.nombre;
    console.log(this.currentTag);
    this.api.postTag(this.currentTag);
    
  }
  

}
