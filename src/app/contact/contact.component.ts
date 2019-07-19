import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact={name:'',mobile:'',email:'',message:''}
  constructor(private toastr: ToastrService,private CommonService:CommonService) { }

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
	  this.CommonService.sendMail(this.contact).subscribe(result =>{
		    console.log("Result",result);
			this.toastr.success('Your message was sent successfully. Thanks.');
	  },error=>{
			this.toastr.error(error.error.message,'Error!');
	  });
  }

}
