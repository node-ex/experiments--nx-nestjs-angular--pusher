import { Module } from '@nestjs/common';
import { PusherController } from './pusher.controller';

@Module({
  imports: [],
  controllers: [PusherController],
  providers: [],
})
export class PusherModule {}
