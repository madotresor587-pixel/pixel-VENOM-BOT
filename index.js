const venom = require('venom-bot');

venom
  .create({
    session: 'PIXEL-VENOM',
    multidevice: true,
    headless: true,
    browserArgs: ['--no-sandbox','--disable-setuid-sandbox']
  })
  .then((client) => {
    console.log("🔥 PIXEL-VENOM-BOT CONNECTÉ 🔥");
    
    client.onMessage(async (message) => {
      if (message.body === '!ping') {
        await client.sendText(message.from, '🏓 Pong! PIXEL-VENOM en ligne 🧛‍♂️');
      }
      if (message.body === '!menu') {
        await client.sendText(message.from, `
*🧛‍♂️ PIXEL-VENOM-BOT MENU*

!ping - Tester bot
!menu - Ce menu
!sticker - Image en sticker
!owner - Info owner
        `);
      }
    });
  })
  .catch((erro) => {
    console.log(erro);
  });
