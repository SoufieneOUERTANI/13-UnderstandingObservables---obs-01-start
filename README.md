# 13UnderstandingObservablesObs01Start

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentation :
    https://www.learnrxjs.io/

## 259 - Getting Closer to the Core of Observables - Subscription, ngOnInit : subscribe, ngOnDestroy : unsubscribe

    private firstSubscription : Subscription;

    ngOnInit() {
        this.firstSubscription = interval(1000).subscribe(count => {
        console.log(count);
        })
    }

    ngOnDestroy(): void {
        this.firstSubscription.unsubscribe();
    }

## 260 - Building a Custom Observable : Observable.create(observer => {.. observer.next(...) }) 

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;
      },1000)
    });
    this.firstSubscription = customIntervalObservable.subscribe(data =>{
      console.log(data);
    });

## 261. Errors & Completion : observer.error(), observer.complete() 

        if(count == 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('counter is greater than 3 !'));
        }


        }, error => {
          console.log(error);
          alert(error.message);
        },() => {
          console.log('completed !');

## 263. Understanding Operators : pipe, filter, map

    this.firstSubscription = customIntervalObservable
    .pipe(filter((data: number) => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    }))

    .subscribe(data =>{

## 264. Subjects
  ### First approach with EventEmitter in userService
      activatedEmitter = new EventEmitter<boolean>();

      this.userService.activatedEmitter.emit(true);

      this.userService.activatedEmitter.subscribe(
        didActivate => this.userActivated = didActivate 
      )

