import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Pusher, { Channel } from 'pusher-js';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-angular-1';
  pusher: Pusher;
  channel: Channel;


  constructor() {
    console.log('PUBLIC_GREETING', process.env.PUBLIC_GREETING);

    Pusher.logToConsole = true;
    this.pusher = new Pusher(process.env.PUBLIC_PUSHER_KEY, {
      cluster: process.env.PUBLIC_PUSHER_CLUSTER,
    });
    console.log('Connected to Pusher');

    this.channel = this.pusher.subscribe('my-channel');
    this.channel.bind('my-event', function(data: any) {
      console.log(data);
    });
    console.log('Subscribed to my-event events from my-channel channel');
  }
}
