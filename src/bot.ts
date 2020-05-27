import Discord from 'discord.js';

require('dotenv').config();

const sendMessage = (msg: string, destination: string) => {
  const client = new Discord.Client();
  client.on('ready', () => {
    const testChannel = client.channels.cache.find(
      (channel) => channel.id === '715174850322235416'
    );
    if (testChannel) {
      testChannel.send(msg, { files: [destination] });
    }
  });

  client.login('NzE1MTc0MDI3OTc0NTQxMzIy.Xs5X3g.uCAH7K8KB7oeTuZZdjWldA6jca4');
};

export default sendMessage;
