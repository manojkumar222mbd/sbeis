import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact={name:'',mobile:'',email:'',message:''}
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  
  onSubmit(){
	  if(!this.contact.name){
		  return this.toastr.error('Name is Required');
	  }else if(!this.contact.email){
		  return this.toastr.error('Email is Required');
	  }else if(!this.contact.mobile){
		  return this.toastr.error('Mobile no. is Required');
	  }
	  this.toastr.success('Your message was sent successfully. Thanks.');
	  
  }

}
