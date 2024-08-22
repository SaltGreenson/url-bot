import { Module } from '@nestjs/common';
import { TelegramModule } from './modules/telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { getConfigModuleConfig } from './core/configs/config-module.config';

@Module({
  imports: [ConfigModule.forRoot(getConfigModuleConfig()), TelegramModule],
})
export class AppModule {}
