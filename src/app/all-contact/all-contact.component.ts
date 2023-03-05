import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
 //to hold all contacts data from api
  allContacts:any =[]
  loginDetails:any;
  searchKey:string=''
  constructor(private api:ApiService){
    this.loginDetails=new Date()

}
ngOnInit(): void {
//to get all contacts
this.getAllContact()
}
//to get all contact
getAllContact(){
  //api call to get all contacts
  this.api.allContacts()
  .subscribe((result:any)=>{
    //result is all contacts array from api
  console.log(result);
  this.allContacts=result
  })
}
  //delete contact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
   .subscribe((data:any)=>{
//window.location.reload()
this.getAllContact()
  
})
}
}
