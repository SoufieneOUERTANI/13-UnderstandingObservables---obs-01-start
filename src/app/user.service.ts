import { EventEmitter, Injectable } from "@angular/core"

@Injectable({providedIn:'root'})
export class Userservice{
    activatedEmitter = new EventEmitter<boolean>();
} 
