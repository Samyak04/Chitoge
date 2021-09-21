import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'chitoge',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}chitoge`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        

        
        
return void M.reply(await request.buffer('https://i.pinimg.com/originals/c1/c4/39/c1c43945cc6e14e72bf45efb7244ea89.jpg'),
MessageType.image,
            undefined,
            undefined,
            `✇ *Kakashi* 〽 \n\n🍀 *Description:* Maintained Fork of WhatsApp Botto Void\n\n🌐 *URL:* https://github.com/well300/Chitoge\n\n📂 *Repository:* https://github.com/well300/Chitoge`
           

)


    }







}
