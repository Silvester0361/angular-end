import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formDetails={
    email: '',
    password: ''
  }

  data :any[]=[]

  clicked(){
    fetch("http://localhost:3000/api/details",{
      method:'POST',
      body:JSON.stringify(this.formDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(()=>{
      console.log('data sent')
    })
    console.log(this.formDetails)
  }

  fetchData(){
    fetch("http://localhost:3000/api/details")
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
this.data = data;
console.log(this.data)
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});
  }

}

