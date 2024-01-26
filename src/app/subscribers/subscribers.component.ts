import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  subscribers: any[] = [];
  total=0

  constructor(private subscribeservices:SubscriberService){}
  ngOnInit(): void {
    this.subscribeservices.loadSubscribers().subscribe(val=>{
      this.subscribers=val;
      this.total=this.subscribers.length
    })
  }

}
