import { Component, OnInit } from '@angular/core';

import { Person2Service } from '../person2.service';
import { Person2 } from '../person2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent2 implements OnInit {

  persons2: Person2[] = [];
 
  constructor(public person2Service: Person2Service) { }


  ngOnInit(): void {
    this.person2Service.getAll().subscribe((data: Person2[])=>{
      this.persons2 = data;
      console.log(this.persons2);
    })
  }

  deletePerson2(id){
   
    this.person2Service.delete(id).subscribe(res => {
         this.persons2 = this.persons2.filter(item => item.id !== id);
         console.log('Person deleted successfully!');

         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Personal eliminado',
          showConfirmButton: false,
          timer: 1500
        })


    })
  }

}
