const venom = require('venom-bot');
venom.create({
  session: 'PIXEL-VENOM',
  multidevice: true,
  headless: true,
  browserArgs: ['--no-sandbox','--disable-setuid-sandbox']
}).then((client) => {
  console.log("🧛‍♂️ PIXEL-VENOM CONNECTÉ");
  client.onMessage(async (msg) => {
    if(msg.body === '!ping') await client.sendText(msg.from, 'Pong! 🧛‍♂️ PIXEL-VENOM en ligne');
    if(msg.body === '!menu') await client.sendText(msg.from, '*PIXEL-VENOM MENU*\n!ping\n!menu\n!sticker');
  });
}).catch(console.log);
