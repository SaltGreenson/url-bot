import { TelegrafModuleAsyncOptions } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IConfig } from '../../../lib/interfaces/IConfig';

export const getTelegrafConfig = (): TelegrafModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService<IConfig, true>) => ({
    token: config.get<string>('TELEGRAM_API'),
  }),
});
