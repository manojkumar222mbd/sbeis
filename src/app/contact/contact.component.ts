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
  isSent=false;
  constructor(private toastr: ToastrService,private CommonService:CommonService) { }

  ngOnInit() {
  }
  
  onSubmit(){
	  this.isSent=true;
	  let mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
	  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	  if(!this.contact.name){
		  return this.toastr.error('Name is Required');
	  }else if(!this.contact.email){
		  return this.toastr.error('Email is Required');
	  }else if(!this.contact.mobile){
		  return this.toastr.error('Mobile no. is Required');
	  }else if(!mobileRegex.test(this.contact.mobile)){
		  return this.toastr.error('Invalid Mobile No.');
	  }else if(!emailRegex.test(this.contact.email)){
		  return this.toastr.error('Invalid Email Id');
	  }
	  this.CommonService.sendMail(this.contact).subscribe(result =>{
		    this.isSent=false;
			this.contact={name:'',mobile:'',email:'',message:''};
			this.toastr.success('Your message was sent successfully. Thanks.');
	  },error=>{
		    this.isSent=false;
			this.contact={name:'',mobile:'',email:'',message:''};
			this.toastr.success('Your message was sent successfully. Thanks.');
	  });
  }

}
