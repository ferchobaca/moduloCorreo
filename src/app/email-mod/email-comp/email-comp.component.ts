import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-email-comp',
  templateUrl: './email-comp.component.html',
  styleUrls: ['./email-comp.component.css']
})
export class EmailCompComponent implements OnInit {
  title = 'sendEmail';
  data:FormGroup;
  constructor( private httpclien:HttpClient) {
    this.data = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      subject: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required)
    })
  }
  sendEmail(){
    let params = {
      email:this.data.value.email,
      subject:this.data.value.subject,
      message:this.data.value.message
    }
    console.log(params);
    this.httpclien.post('http://localhost:3000/send',params).subscribe(resp =>{
      console.log(resp);
    })
  }
  ngOnInit(): void {
  }

}
