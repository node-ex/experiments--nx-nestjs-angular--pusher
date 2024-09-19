import { Controller, Get, Post } from '@nestjs/common';
import Pusher from 'pusher';

@Controller('pusher')
export class PusherController {
  pusher: Pusher;

  constructor() {
    this.pusher = new Pusher({
      appId: process.env['PUSHER_APP_ID']!,
      key: process.env['PUBLIC_PUSHER_KEY']!,
      secret: process.env['PUSHER_SECRET']!,
      cluster: process.env['PUBLIC_PUSHER_CLUSTER']!,
      useTLS: true,
    });
    console.log('Connected to Pusher');
  }

  @Post('send')
  async sendEvent() {
    await this.pusher.trigger('my-channel', 'my-event', 'Hello from server');
    console.log('Sent event');
  }
}
