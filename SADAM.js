const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

// طبعا الكود هيبقا صعب انك تفهم لوحدك لنو معقد شويتين لكن فكرتو سهلة وحاولت اوفرلكم حاجات كتير مثل انك تقدر تشغل 20 توكانات ف الكود ده
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./SADAM.json");
const prefix = config.prefix;
/////////////////// {DAST LERA MADA }////////////////////////

//const client1 = new Discord.client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
//const client12 = new Discord.client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
//const client20 = new Discord.client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client(); 
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client(); 
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client(); 
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client(); 
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client(); 
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client(); 
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const client83 = new Discord.Client();
const client84 = new Discord.Client();
const client85 = new Discord.Client();
const client86 = new Discord.Client();
const client87 = new Discord.Client();
const client88 = new Discord.Client();
const client89 = new Discord.Client();
const client90 = new Discord.Client();
const client91 = new Discord.Client();
const client92 = new Discord.Client();
const client93 = new Discord.Client(); 
const client94 = new Discord.Client();
const client95 = new Discord.Client();
const client96 = new Discord.Client();
const client97 = new Discord.Client();
const client98 = new Discord.Client();
const client99 = new Discord.Client(); 
const client100 = new Discord.Client();

/////////////////// {DAST LERA MADA }////////////////////////

  


// كههربا (حسن ياسر)
const help = `**
       \`\`\`  Main Commands  :   \`\`\`
                  
`;
// كههربا (حسن ياسر)

const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./SADAM1.json", "UTF8"));



// ======= [ settings JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //


// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite;


client2.on("ready", () => {
  console.log(`[BOT] ${client2.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

client3.on("ready", () => {
  console.log(`[BOT] ${client3.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

client4.on("ready", () => {
  console.log(`[BOT] ${client4.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

client5.on("ready", () => {
  console.log(`[BOT] ${client5.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

client6.on("ready", () => {
  console.log(`[BOT] ${client6.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

client7.on("ready", () => {
  console.log(`[BOT] ${client7.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

client8.on("ready", () => {
  console.log(`[BOT] ${client8.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

client9.on("ready", () => {
  console.log(`[BOT] ${client9.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

client10.on("ready", () => {
  console.log(`[BOT] ${client10.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

client11.on("ready", () => {
  console.log(`[BOT] ${client11.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});



client13.on("ready", () => {
  console.log(`[BOT] ${client13.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

client14.on("ready", () => {
  console.log(`[BOT] ${client14.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

client15.on("ready", () => {
  console.log(`[BOT] ${client15.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

client16.on("ready", () => {
  console.log(`[BOT] ${client16.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

client17.on("ready", () => {
  console.log(`[BOT] ${client17.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

client18.on("ready", () => {
  console.log(`[BOT] ${client18.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

client19.on("ready", () => {
  console.log(`[BOT] ${client19.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});


// DONE //
// ======= [ Console LOG - END   ] ======== //





  



// ======= [ MODE - Join Server , add Friend   ] ======== //
//client1.on("message", async message => {
//  if (!dinfo.owner.includes(message.author.id)) return;
 // if (message.content.startsWith(config.prefix + "friend")) {
   // await addFriend(message.content.split(" ").slice(1)[0], message);
 // } else if (message.content.startsWith(config.prefix + "join")) {
  //  joinServer(message.content.split(" ").slice(1)[0], message);
 // } else return null;
//});

client2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client8.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});


client13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});


///////::////

client21.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client23.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client24.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client25.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});


client26.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client27.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client28.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client29.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client30.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});



client31.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client32.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client33.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client34.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client35.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});



client36.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client37.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client38.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client39.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client40.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});


client41.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client42.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client43.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client44.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client45.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});




client46.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client47.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client48.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client49.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client50.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});



client51.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client52.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client53.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client54.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client55.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});


client56.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client57.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client58.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client59.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client60.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client61.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client62.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client63.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client64.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client65.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client66.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client67.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client68.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client69.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client70.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});


client71.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client72.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client73.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client74.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client75.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client76.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client77.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client78.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client79.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client80.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client81.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client82.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client83.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client84.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client85.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client86.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client87.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client88.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client89.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client90.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client91.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client92.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client93.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client94.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client95.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

client96.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client97.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client98.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client99.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
client100.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

// ======= [ MODE - Join Server , add Friend END  ] ======== //

// ======= [ MODE - React MSG  ] ======== //
//client.on("message", async message => {
//  if (message.content.startsWith(prefix + "react")) {
 ///   if (!dinfo.owner.includes(message.author.id)) return;
 //   let args = message.content.split(" ").slice(1);
  //  console.log(
  //    args
  //      .slice(2)
   //     .join(" ")
  //      .replace(/\<|\>/g, "")
 //       .split(":")
 //   );
  //  if (!args[0])
  //    return message.channel.send(
   //     " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
 //     );
 //   if (args[0].length > 18 || args[0].length <= 17) {
  //    return message.channel
   //     .send(" Error : ``تاكد من ايدي الروم``")
  //      .then(message => message.delete(4000));
 ///   }
 //   if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
  //  if (!args[1])
  //    return message.channel
   ////     .send(
    //      " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
    //    )
   //     .then(message => message.delete(4000));
  ///  if (args[1].length > 18 || args[1].length <= 17) {
  ///    return message.channel
   ///     .send(" Error : ``تاكد من ايدي الرسالة``")
 ////       .then(message => message.delete(4000));
  ///  }
  ///  if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
 //   if (!args[2])
  ///    return message.channel
 ////       .send(
 ////         " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
 ///       )
  ////      .then(message => message.delete(4000));
 ///   let channel = await message.guild.channels.get(args[0]);
// ////   if (!channel) return;
//:://    let msg = await channel.fetchMessage(args[1]);
////// ////   if (!msg) return;
//    if (!args.slice(2)) return;
 /////   if (
///      args
 //       .slice(2)
  ///      .join(" ")
 //       .replace(/\<|\>/g, "")
    //    .split(":")[2] &&
   ///   args
   ///     .slice(2)
  ///      .join(" ")
   ///     .replace(/\<|\>/g, "")
   //     .split(":")[2].length == 18
 //   ) {
   ///   try {
  ///      await msg.react(
  ///        client.emojis.get(
  // //         args
  //            .slice(2)
   ///           .join(" ")
   //           .replace(/\<|\>/g, "")
   //           .split(":")[2]
   //       )
  //      );
  //    } catch (e) {
 ///       return;
  ///    }
 ///   } else {
 //////     try {
 ////       await msg.react(args[2]);
///  ///      await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
  ///    } catch (e) {
 ///       return;
 ///     }
/////    }
///  }
//});
client2.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
client3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          client7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      } catch (e) {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
});
client8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

    
client13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
client19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

     
        
// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //

client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});

client13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});

////

client21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});


client23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});



client26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client27.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});




client29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client31.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});

client32.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client33.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client34.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client35.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client36.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client37.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});

client38.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client39.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client40.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});




client41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client42.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client43.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client44.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client45.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client46.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client47.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client48.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client49.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client50.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client51.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client52.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client53.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client54.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client55.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});

client56.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client57.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client58.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client59.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client60.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client61.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client62.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client63.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client64.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client65.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client66.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client67.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});



client68.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client69.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client70.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});



client71.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client72.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client73.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});




client74.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client75.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client76.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client77.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client78.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client79.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});

client80.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client81.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client82.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client83.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client84.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client85.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});



client86.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client87.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client88.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});



client89.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client90.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client91.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});



client92.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client93.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client94.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});


client95.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client95.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client96.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("** **");
    }
  }
});




client97.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client98.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});

client99.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});
client100.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لازم تخش روم صوتي!**");
    }
  }
});



// ======= [ StayVoice - MODE END  ] ======== //

// ======= [ Credits - INFO ] ======== //


client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});

client13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});

// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //


client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});

client13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});


// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //


client2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client6.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});
client10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    message.channel.send("#profile");
  }
});
client11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});

client13.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
client19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});

// ======= [ DAST LERA MADA ] ======== //

//client.login(process.env.sadamTOKEN);
client2.login(process.env.sadamTOKEN2);
client3.login(process.env.sadamTOKEN3); 
client4.login(process.env.sadamTOKEN4);
client5.login(process.env.sadamTOKEN5);
client6.login(process.env.sadamTOKEN6);
client7.login(process.env.sadamTOKEN7);
client8.login(process.env.sadamTOKEN8);
client9.login(process.env.sadamTOKEN9);
client10.login(process.env.sadamTOKEN10); 
client11.login(process.env.sadamTOKEN11);
///client12.login(process.env.sadamTOKEN12);
client13.login(process.env.sadamTOKEN13); 
client14.login(process.env.sadamTOKEN14);
client15.login(process.env.sadamTOKEN15);
client16.login(process.env.sadamTOKEN16);
client17.login(process.env.sadamTOKEN17);
client18.login(process.env.sadamTOKEN18);
client19.login(process.env.sadamTOKEN19);
//client20.login(process.env.sadamTOKEN20);
client21.login(process.env.sadamTOKEN21);
client22.login(process.env.sadamTOKEN22);
client23.login(process.env.sadamTOKEN23); 
client24.login(process.env.sadamTOKEN24);
client25.login(process.env.sadamTOKEN25);
client26.login(process.env.sadamTOKEN26);
client27.login(process.env.sadamTOKEN27);
client28.login(process.env.sadamTOKEN28);
client29.login(process.env.sadamTOKEN29);
client30.login(process.env.sadamTOKEN30); 
client31.login(process.env.sadamTOKEN31);
client32.login(process.env.sadamTOKEN32);
client33.login(process.env.sadamTOKEN33); 
client34.login(process.env.sadamTOKEN34);
client35.login(process.env.sadamTOKEN35);
client36.login(process.env.sadamTOKEN36);
client37.login(process.env.sadamTOKEN37);
client38.login(process.env.sadamTOKEN38);
client39.login(process.env.sadamTOKEN39);
client40.login(process.env.sadamTOKEN40);
client41.login(process.env.sadamTOKEN41);
client42.login(process.env.sadamTOKEN42);
client43.login(process.env.sadamTOKEN43); 
client44.login(process.env.sadamTOKEN44);
client45.login(process.env.sadamTOKEN45);
client46.login(process.env.sadamTOKEN46);
client47.login(process.env.sadamTOKEN47);
client48.login(process.env.sadamTOKEN48);
client49.login(process.env.sadamTOKEN49);
client50.login(process.env.sadamTOKEN50); 
client51.login(process.env.sadamTOKEN51);
client52.login(process.env.sadamTOKEN52);
client53.login(process.env.sadamTOKEN53); 
client54.login(process.env.sadamTOKEN54);
client55.login(process.env.sadamTOKEN55);
client56.login(process.env.sadamTOKEN56);
client57.login(process.env.sadamTOKEN57);
client58.login(process.env.sadamTOKEN58);
client59.login(process.env.sadamTOKEN59);
client60.login(process.env.sadamTOKEN60);
client61.login(process.env.sadamTOKEN61);
client62.login(process.env.sadamTOKEN62);
client63.login(process.env.sadamTOKEN63); 
client64.login(process.env.sadamTOKEN64);
client65.login(process.env.sadamTOKEN65);
client66.login(process.env.sadamTOKEN66);
client67.login(process.env.sadamTOKEN67);
client68.login(process.env.sadamTOKEN68);
client69.login(process.env.sadamTOKEN69);
client70.login(process.env.sadamTOKEN70); 
client71.login(process.env.sadamTOKEN71);
client72.login(process.env.sadamTOKEN72);
client73.login(process.env.sadamTOKEN73); 
client74.login(process.env.sadamTOKEN74);
client75.login(process.env.sadamTOKEN75);
client76.login(process.env.sadamTOKEN76);
client77.login(process.env.sadamTOKEN77);
client78.login(process.env.sadamTOKEN78);
client79.login(process.env.sadamTOKEN79);
client80.login(process.env.sadamTOKEN80);
client81.login(process.env.sadamTOEN81);
client82.login(process.env.sadamTOKEN82);
client83.login(process.env.sadamTOKEN83); 
client84.login(process.env.sadamTOKEN84);
client85.login(process.env.sadamTOKEN85);
client86.login(process.env.sadamTOKEN86);
client87.login(process.env.sadamTOKEN87);
client88.login(process.env.sadamTOKEN88);
client89.login(process.env.sadamTOKEN89);
client90.login(process.env.sadamTOKEN90); 
client91.login(process.env.sadamTOKEN91);
client92.login(process.env.sadamTOKEN92);
client93.login(process.env.sadamTOKEN93); 
client94.login(process.env.sadamTOKEN94);
client95.login(process.env.sadamTOKEN95);
client96.login(process.env.sadamTOKEN96);
client97.login(process.env.sadamTOKEN97);
client98.login(process.env.sadamTOKEN98);
client99.login(process.env.sadamTOKEN99);
client100.login(process.env.sadamTOKEN100);

// ======= [ DAST LERA MADA ] ======== //p