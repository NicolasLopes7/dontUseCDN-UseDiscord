import Discord from 'discord.js';

require('dotenv').config();

const sendMessage = (msg: string, destination: string) => {
  let imgurl = '';
  const client = new Discord.Client();
  client.on('ready', () => {
    const testChannel = client.channels.cache.find(
      (channel) => channel.id === '715174850322235416'
    );
    if (testChannel) {
      testChannel.send(msg, { files: [destination] }).then((sent) => {
        const { id } = sent;
        testChannel.messages
          .fetch(id)
          .then((message) => {
            imgurl = message.attachments.first().url;
            console.log(message.attachments.first().url);
          })
          .catch(console.error);
      });
    }
  });

  client.login('NzE1MTc0MDI3OTc0NTQxMzIy.Xs5X3g.uCAH7K8KB7oeTuZZdjWldA6jca4');
  return imgurl;
};

export default sendMessage;
