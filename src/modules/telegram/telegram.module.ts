import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { getTelegrafConfig } from '../../core/configs/telegraf.config';

@Module({
  imports: [TelegrafModule.forRootAsync(getTelegrafConfig())],
  providers: [TelegramService],
})
export class TelegramModule {}
