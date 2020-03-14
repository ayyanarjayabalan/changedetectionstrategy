import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changedetection';

  course = {
    id: 1,
    name: 'Angular',
    price: 2000
  };

  courseSubject = new BehaviorSubject(this.course);

  changeCourseName() {
    // const c = {...this.course};
    // c.name = 'React';
    // this.course = c;

    this.course.name = 'Dotnet';

    this.courseSubject.next(this.course);
  }
}
