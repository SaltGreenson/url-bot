import { Ctx, Message, On, Start, Update } from 'nestjs-telegraf';
import { Scenes, Telegraf } from 'telegraf';
import { text } from './text-transform/bold.transform';
// import * as TelegramTypes from '@telegraf/types';

// import TextMessage = TelegramTypes.Message.TextMessage;

interface Context extends Scenes.SceneContext {}

@Update()
export class TelegramService extends Telegraf<Context> {
  @Start()
  onStart(@Ctx() ctx: Context) {
    void ctx.replyWithHTML(`Hi ${text.bold(ctx.from.first_name)}!`);
  }

  @On('text')
  onMessage(@Ctx() ctx: Context, @Message('text') message: string) {
    void ctx.reply(message);
  }
}
