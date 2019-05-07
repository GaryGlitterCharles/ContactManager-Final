import { Component, OnInit, ViewChild } from "@angular/core";
import { UserServiceService } from "../../services/user-service.service";
import { User } from "../../modules/user";
import {  Router } from "@angular/router";
import { MatSidenav } from '@angular/material';
const SMALL_SCREEN_SIZE = 720;
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav : MatSidenav;
  displayDetails: User[];
  opened: boolean = true;
  constructor(private services: UserServiceService,private router : Router) {}
  mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_SCREEN_SIZE}px)`
  );

  ngOnInit() {
    
    this.services.getDetails().subscribe(data => {
      this.displayDetails = data;
      
    });

      this.router.events.subscribe(()=>{
        if(this.isScreenSmall()){
          this.sidenav.close();
        }
      })
      
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
