import { Injectable } from "@angular/core";
import { ContactManagerModule } from "../contact-manager.module";
import { HttpClient } from "@angular/common/http";
import { User } from "../modules/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 URL = "https://angular-material-api.azurewebsites.net/users";
 // URL = "http://localhost:4000/details"
  constructor(private http: HttpClient) {}

  getDetails() {
    return this.http.get<User[]>(this.URL);
  }
  findById(id : number){
    return this.http.get<User[]>(this.URL)
  }

  addUser(user : User){
  
    return this.http.post(this.URL,user).subscribe(s=>{
      
    });
    
    
  }
}
