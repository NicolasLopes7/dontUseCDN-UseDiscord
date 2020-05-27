import Discord from 'discord.js';
import { Response } from 'express';

require('dotenv').config();

interface Isent {
  sent?: object;
  id?: number;
}

const sendMessage = (msg: string, destination: string, res: Response) => {
  const client = new Discord.Client();
  client.on('ready', () => {
    const testChannel = client.channels.cache.find(
      (channel) => channel.id === '715174850322235416'
    );
    if (testChannel) {
      testChannel.send(msg, { files: [destination] }).then((sent: Isent) => {
        const { id }: Isent = sent;
        testChannel.messages.fetch(id).then((message) => {
          return res.json({ url: message.attachments.first().url });
        });
      });
    }
  });

  client.login('NzE1MTc0MDI3OTc0NTQxMzIy.Xs5X3g.uCAH7K8KB7oeTuZZdjWldA6jca4');
};

export default sendMessage;
