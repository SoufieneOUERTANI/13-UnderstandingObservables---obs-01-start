import { Injectable } from "@angular/core"
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class Userservice{
    activatedEmitter = new Subject<boolean>();
} 
