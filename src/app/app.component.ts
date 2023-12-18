import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'creation-functions';

  // Define a variable for the subscription (this is so we can ubsubscribe from the variable)
  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subString!: Subscription;

  ngOnInit(){
    // emits a next notification for each number
    this.sub = of(2, 4, 6, 8).subscribe(item => {console.log('Value from of: ', item);});
    // emits a single next notification
    this.subArray = of([2, 4, 6, 8]).subscribe(item => {console.log('Value from of: ', item);});
    // Passing an array in the from creation function emits next notification on all numbers
    this.subFrom = from([20, 15, 10, 5]).subscribe({
      next: item => console.log('From item: ', item),
      error: err => console.log('From error: ', err),
      complete: () => console.log('From completed')
    });
    this.subString = of('String 1', 'String 2', 'String 3').subscribe({
      next: item => console.log('From subString: ', item),
      error: err => console.log('From err: ', err),
      complete: () => console.log('From completed in subString: ')
    });
  }

  ngOnDestroy(){
    // We then unsubscribe (this is good practice)
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subString.unsubscribe();
  }

}
