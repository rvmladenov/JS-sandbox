import { Component } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus-experiments/event-bus';
import { Lesson } from "app/shared/model/lesson.model";

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {
  
  lessons: Lesson[] = [];
  
  constructor() {

    // FIXME: We nee to avoid this, instead use the ngOnInit hook
    // but because the root component notify in the ngOnInit an this component is loaded after that - we need to register
    // before the root component sends the notification
    console.log("Registered for notify");
    globalEventBus.registerObserver(this);
  }

  notify(data: Lesson[]) {
    console.log("Update data");
    this.lessons = data;
  }
}
