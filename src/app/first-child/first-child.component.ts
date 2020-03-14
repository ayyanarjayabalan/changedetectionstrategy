import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstChildComponent implements OnInit {

  @Input() course: Observable<any>;

  _course: any;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.course.subscribe((data) => {
      console.log('Subscription called');

      this._course = data;

      // this.cd.markForCheck();
    });
  }

}
