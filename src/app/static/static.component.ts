
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id)); 
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      //this.codeId = id;
    });

  }
  showCompA(){
   this.router.navigate(['comp1'], {relativeTo: this.route});
   
  }

  showCompB(){
    this.router.navigate(['comp2'], {relativeTo: this.route});
  }
 
}
