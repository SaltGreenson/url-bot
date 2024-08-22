import { ConfigModuleOptions } from '@nestjs/config';
import { validateConfig } from './validate';

export const getConfigModuleConfig = (): ConfigModuleOptions => ({
  isGlobal: true,
  cache: true,
  validate: validateConfig,
});
