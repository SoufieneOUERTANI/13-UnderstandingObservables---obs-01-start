import { Component, OnDestroy, OnInit } from '@angular/core';
import { Userservice } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated : boolean = false;

  activatedEmitterSubscribtion :Subscription;

  constructor(private userService : Userservice) {}

  ngOnInit() {
    this.activatedEmitterSubscribtion  = this.userService.activatedEmitter.subscribe(
      didActivate => this.userActivated = didActivate 
    )
  }

  ngOnDestroy() {
    this.activatedEmitterSubscribtion.unsubscribe;
  }
}
