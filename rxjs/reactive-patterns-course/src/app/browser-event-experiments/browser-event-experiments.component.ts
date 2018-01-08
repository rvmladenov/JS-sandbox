import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById("hover");
    this.hoverSection.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(ev: MouseEvent) {
    console.log(ev);
  }

  unsubscribe() {
    console.log('Removed the event listener');
    this.hoverSection.removeEventListener("mousemove", this.onMouseMove);
  }

}
