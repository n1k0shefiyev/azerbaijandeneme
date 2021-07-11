const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login( process.env.token);
////////////OtoCevap

//Nihad Design


const data = new Map();


//kurucunun mesajina tepki client olan / asagidakilarin hamisi eyni komutdu  // ADMIN MESAJLARINA TEPKI BASLANGIC







//oz profilim benzer botu  tanitma ve sese soxma


//gif pp botumuzun tanaitmak ve sese sokmak 

const gifpp = new Discord.Client();
gifpp.login("ODM2MTkyMzk4ODQ5NDc0NTcx.YIaa2w.PJ4TU53yZFQVe94PHGAZuYNZxVs")//Hesap Tokeni Token


// -------------------------------------------------------------------------------------------------------------

//BURDAN BUYAN UJE BLACK COFFEE AITDIR 

//EVVELA BASLIYAH BOTLARIMIZI TANIMLAYAG

//Barmen
// Fast Food
// Sinema
//Garson

const Barmen = new Discord.Client();
const FastFood = new Discord.Client();
const Sinema = new Discord.Client();
const Garson = new Discord.Client();
const Cafe = new Discord.Client();
const BlackCoffee = new Discord.Client();
const InternetCafe = new Discord.Client();
const ClupDj = new Discord.Client();




BlackCoffee.login("NzIzNjMyMTI1ODM2MDAxNDA2.Xu0c7w.eMBKEUu8sDc1i492JJOF1gAES2Y")//Hesap Tokeni Token
Barmen.login("NzczMDY2MTU3MjcxMjg1Nzcw.X6Dz9g.PtvWiUvitbqB0cQIORJWVX6OEv4")//Hesap Tokeni Token
FastFood.login("Nzc5NzcwMDc5NjY2NTAzNzUw.X7lXeg.yZg49zRSSKgt2hW2PEAs-8o5Gvo")//Hesap Tokeni Token
Sinema.login("NzczMDY2MjY2ODQ4MTMzMTgx.X6D0EA.msvUDsWabkx2RfOHSCe4yV2yt9E")//Hesap Tokeni Token
Garson.login("NzczMDY1NjEyMTIwODE3NjY2.X6DzdA.HQDY2NyovpxfbuBguS6Amo7Ae2U")//Hesap Tokeni Token
Cafe.login("NzIzMDU3ODk5ODk0NjAzNzg2.XusGJQ.1ohr3yPqonHLYWPxtET1CaQTTBA")//Hesap Tokeni Token
InternetCafe.login("Nzg1OTk3MTQ4NzA1MTI4NDU5.X8_-4w.Egp_TMy8u8mdmsXk-1r9BfkhDBg")//Hesap Tokeni Token
ClupDj.login("Nzg2MDU5MzM1NTExMDQ4MjIy.X9A4zQ.It76txU9TEP-KR74B-JPTI70znM")//Hesap Tokeni Token


BlackCoffee.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      BlackCoffee.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})


Barmen.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Barmen.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

FastFood.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      FastFood.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

Sinema.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Sinema.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})


Garson.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Garson.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

Cafe.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Cafe.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

InternetCafe.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      InternetCafe.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

ClupDj.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      ClupDj.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})



BlackCoffee.on('ready', ()=>{
  setTimeout(() => {
BlackCoffee.channels.cache.get('834265543233765377').join()// bi deq düzeldirem
     }, 1000)
})


Barmen.on('ready', ()=>{
  setTimeout(() => {
Barmen.channels.cache.get('834341550925283349').join()// bi deq düzeldirem
     }, 1000)
})

FastFood.on('ready', ()=>{
  setTimeout(() => {
FastFood.channels.cache.get('834412947161612288').join()// bi deq düzeldirem
     }, 1000)
})

Sinema.on('ready', ()=>{
  setTimeout(() => {
Sinema.channels.cache.get('834342051926900776').join()// bi deq düzeldirem
     }, 1000)
})

Garson.on('ready', ()=>{
  setTimeout(() => {
Garson.channels.cache.get('834335926041051136').join()// bi deq düzeldirem
     }, 1000)
})

Cafe.on('ready', ()=>{
  setTimeout(() => {
Cafe.channels.cache.get('834406495592251412').join()// bi deq düzeldirem
     }, 1000)
})

InternetCafe.on('ready', ()=>{
  setTimeout(() => {
InternetCafe.channels.cache.get('834428840105082930').join()// bi deq düzeldirem
     }, 1000)
})

ClupDj.on('ready', ()=>{
  setTimeout(() => {
ClupDj.channels.cache.get('834700632358780938').join()// bi deq düzeldirem
     }, 1000)
})



//HG MESAJI


BlackCoffee.on('guildMemberAdd', (member, msg) => {
  const moment = require('moment')
	let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
	}
	  let aylar = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
  let endAt = member.user.createdAt
      let gün = moment(new Date(endAt).toISOString()).format('DD')
      let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
     let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
     let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
   // let kuruluş = moment(user.author.createdAt).format('YYYY-MM-DD HH:mm:ss')
	//let kuruluş = user.createdAt.toDateString().replace("Sun","Pazar").replace("Mon","Pazartesi").replace("Tue","Salı").replace("Wed","Çarşamba").replace("Thu","Perşembe").replace("Fri","Cuma").replace("Sat","Cumartesi").replace("Jan","Ocak").replace("Feb","Şubat").replace("Mar","Mart").replace("Apr","Nisan").replace("May","Mayıs").replace("June","Haziran").replace("July","Temmuz").replace("Aug","Ağustos").replace("Sep","Eylül").replace("Oct","Ekim").replace("Nov","Kasım").replace("Dec","Aralık")   
	let oskobs = new Discord.MessageEmbed()
	.setColor("BLACK")
    .setDescription(`<a:44re:826680866214248458>** <@${member.id}> Aramıza Hoşgeldin Seninle Birlikte** \`${member.guild.memberCount}\` **Üyeye Ulaştık** \n<a:55ef4:802030217173401611>**Sunucumuzda Kanalları Görebilmen İçin Kayıt Olman Gerekli Bunun İçin İse Yanda Bulunan Ses Kanallarına Girerek Kayıt Olabilirsin**\n<a:balacasiemoji:728876419966304267>  **<@&834152265173958717> Adı Rolüne Sahip Kişiler Kayıt İşlemlerinle İlgilenecektir**\n <a:3_:826674876495560755> **Hesap Kuruluş Tarihi :** \`${kuruluş}\``)
.setImage("https://i.pinimg.com/originals/73/f7/ac/73f7ac7c4e48673ff7cb922a3a5705ff.gif")  
BlackCoffee.channels.cache.get("834334765947289610").send(oskobs)//kanalid
})




//tag

//tag yazanda tag atacaq

BlackCoffee.on("message" , async message => {

if(message.content==="tag")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})



BlackCoffee.on("message" , async message => {

if(message.content==="TAG")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})

BlackCoffee.on("message" , async message => {

if(message.content==="+tag")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})

BlackCoffee.on("message" , async message => {

if(message.content==="!tag")

message.channel.send("☕")
if(message.content != "☕") return
message.react("795235519444942869")

})

//oto cevaplar


////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
///////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamlar") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamunaleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});
/////////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SelamunAleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SA") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin <a:AleykumSelamm:823672703814336552> ** "
    );
  }
});

//////////////
BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin **  <a:AleykumSelamm:823672703814336552> "
    );
  }
});

BlackCoffee.on("message" , async message => {

if(message.content==="Selamm")

message.channel.send("**Aleyküm Selam Hoşgeldin **  <a:AleykumSelamm:823672703814336552>")

})

BlackCoffee.on('ready', ()=>{
BlackCoffee.channels.cache.get('834692262624886824').startTyping()
})

//https://discord.gg/8rSC4Sj4CW

BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "link") {
    msg.reply(
      "https://discord.gg/RhjqbJG5C2"
    );
  }
});

BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "LINK") {
    msg.reply(
      "https://discord.gg/RhjqbJG5C2"
    );
  }
});

BlackCoffee.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Link") {
    msg.reply(
      "https://discord.gg/RhjqbJG5C2"
    );
  }
});


//Garson botunun sistemi



Garson.on("message" , async message => {

if(message.content==="Cola")

message.channel.send("https://media3.giphy.com/media/v2YxCO2pwHjji/giphy.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Garson.on("message" , async message => {

if(message.content==="Çay")

message.channel.send("https://media1.tenor.com/images/256e1e27e061c5fb1a571099bb324975/tenor.gif?itemid=17825685")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})






//Barmen Botunun sistemi

Barmen.on("message" , async message => {

if(message.content==="Votka")

message.channel.send("https://i0.wp.com/harikalardiyarikackini.com/wp-content/uploads/2019/12/bartender.gif?resize=480%2C238&ssl=1")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


Barmen.on("message" , async message => {

if(message.content==="Cappuccino")

message.channel.send("https://img.paratic.com/dosya/2017/01/kahvenizi-de-alip-soyle-guzel-bir-balkon-sefasi-yapin.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})






//FastFood Botunun sistemi


FastFood.on("message" , async message => {

if(message.content==="Burger")

message.channel.send("https://data.whicdn.com/images/287381454/original.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

FastFood.on("message" , async message => {

if(message.content==="Pizza")

message.channel.send("https://media1.giphy.com/media/4ayiIWaq2VULC/200.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

FastFood.on("message" , async message => {

if(message.content==="Lahmacun")

message.channel.send("https://media.tenor.com/images/2e8c18a9702ecb97c84ca84d8243dacd/tenor.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


FastFood.on("message" , async message => {

if(message.content==="Patates")

message.channel.send("https://media.discordapp.net/attachments/834692262624886824/835031887822192680/patates-kizartmasi.gif?width=400&height=240")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})







//Sinema Botunun sistemi










//Garson Botunun sistemi

Garson.on("message" , async message => {

if(message.content==="Döner")

message.channel.send("https://thumbs.gfycat.com/AmbitiousHastyHoneycreeper-size_restricted.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Garson.on("message" , async message => {

if(message.content==="Rakı")

message.channel.send("https://64.media.tumblr.com/60ca335c819c3edc9f6f6669b710b517/tumblr_inline_p27g1zYwsj1u429ij_500.gifv")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Garson.on("message" , async message => {

if(message.content==="Puding")

message.channel.send("https://media.discordapp.net/attachments/827698885279219743/835046039110156288/OfBa.gif?width=400&height=226")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


Garson.on("message" , async message => {

if(message.content==="Pasta")

message.channel.send("https://media.discordapp.net/attachments/827698885279219743/835046277870911488/ee8211ae85f8f741a280fe323fe26b56.gif?width=200&height=250")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})






//Cafe Botunun sistemi


Cafe.on("message" , async message => {

if(message.content==="Pancake")

message.channel.send("https://media1.tenor.com/images/15881949a61fa73092a544b63c412f23/tenor.gif?itemid=9338685")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Cafe.on("message" , async message => {

if(message.content==="Omlet")

message.channel.send("https://thumbs.gfycat.com/AppropriateSadAsianlion-size_restricted.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})

Cafe.on("message" , async message => {

if(message.content==="Simit")

message.channel.send("https://i.pinimg.com/originals/75/c0/fd/75c0fd328a5f287272b0e91c73d6e409.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


Cafe.on("message" , async message => {

if(message.content==="Tost")

message.channel.send("https://i.pinimg.com/originals/86/da/f8/86daf88c3937ffaacf532fb186067f3e.gif")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})





//InternetCafe Botunun sistemi










//ClupDj Botunun sistemi



//T K SECRET INSAN HESAOLARINA OXSAYAN BOTLAR

const Farketmez = new Discord.Client();
const Aero = new Discord.Client();
const Rotwein = new Discord.Client();
const Dark = new Discord.Client();


Farketmez.login("Nzk4NzUzMjg4NjA2MDU2NTA4.X_5m-A._zicoZsxAVrUA_z2Y3l9XdqZ9SE")//Hesap Tokeni Token
Aero.login("Nzk5MDcyNjQ5ODM3Njc0NTM2.X_-QZQ.gbM3LI2RZn8_xOO3JcLzHWsE-QM")//Hesap Tokeni Token
Rotwein.login("ODM1NjEwNjE4ODk4OTM5OTQ1.YIR9CA.ZlJHzKvKmo2vF7wiBp9USZ722-g")//Hesap Tokeni Token
Dark.login("ODM1NjA5MzQ2NTMyNDQyMTcy.YIR72Q.4yVK319vTEzBogxXKL19d2fVgcc")//Hesap Tokeni Token




Farketmez.on('ready', ()=>{
  setTimeout(() => {
Farketmez.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})

Aero.on('ready', ()=>{
  setTimeout(() => {
Aero.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})

Rotwein.on('ready', ()=>{
  setTimeout(() => {
Rotwein.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})

Dark.on('ready', ()=>{
  setTimeout(() => {
Dark.channels.cache.get('835495220253818881').join()// bi deq düzeldirem
     }, 1000)
})



//Entry card bilgiler ve dm log

const Entrycard = new Discord.Client();

Entrycard.login("ODM1NzU2ODI5MDQ4NTY5ODU3.YIUFMw.1mCI0F9b-GeGqUNuvkC02UP9hrE")//Hesap Tokeni Token


Entrycard.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      Entrycard.user.setActivity("☕ Black Coffee 🖤", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

Entrycard.on("message", msg => {
var dm = Entrycard.channels.cache.get("835773848191893534")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`<a:ewe:834693611277910056> Yeni Bir Mesajım Var`)
.setTimestamp()
.setColor("black")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Müşteri <a:bu:835770486616883200>", msg.author.tag)
.addField("Müşteri ID <a:buu:835770486754639872>", msg.author.id)
.addField("Sipariş <a:buuu:835770497110114325>", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});


Entrycard.on('ready', ()=>{
Entrycard.channels.cache.get('835752555786665994').startTyping()
})

Entrycard.on('ready', ()=>{
Entrycard.channels.cache.get('835752617288269875').startTyping()
})

Entrycard.on('ready', ()=>{
Entrycard.channels.cache.get('835773848191893534').startTyping()
})

Entrycard.on('ready', ()=>{
  setTimeout(() => {
Entrycard.channels.cache.get('834265543233765377').join()// bi deq düzeldirem
     }, 1000)
})



//welcome
const welcometocoffee = new Discord.Client();
welcometocoffee.login("Nzk0OTAxMzA5NzIzNjM5ODQ4.X_BjiA.WubYQfW03HMvxph1PeyPDAjlV70")//Hesap Tokeni Token

//webhook 

const { WebhookClient, MessageEmbed } = require('discord.js')
const Yaprak = new Discord.WebhookClient("835738810867253258", "kfyZqcG3P8mFrotf8RjwwDiOFtGoUqyYSaTChJo9-osqqKQTUXXnL_MgNtwpcA_6iw0Q") //⁶⁶⁶ DEVIL








Barmen.on('message', async Barmen => {
if (Barmen.author.id == '289464872222064651') {
await Barmen.react('836524031096127529')
}
});

FastFood.on('message', async FastFood => {
if (FastFood.author.id == '289464872222064651') {
await FastFood.react('836524031096127529')
}
});

Sinema.on('message', async Sinema => {
if (Sinema.author.id == '289464872222064651') {
await Sinema.react('836524031096127529')
}
});

Garson.on('message', async Garson => {
if (Garson.author.id == '289464872222064651') {
await Garson.react('836524031096127529')
}
});

Cafe.on('message', async Cafe => {
if (Cafe.author.id == '289464872222064651') {
await Cafe.react('836524031096127529')
}
});

BlackCoffee.on('message', async BlackCoffee => {
if (BlackCoffee.author.id == '289464872222064651') {
await BlackCoffee.react('836524031096127529')
}
});

InternetCafe.on('message', async InternetCafe => {
if (InternetCafe.author.id == '289464872222064651') {
await InternetCafe.react('836524031096127529')
}
});

ClupDj.on('message', async ClupDj => {
if (ClupDj.author.id == '289464872222064651') {
await ClupDj.react('836524031096127529')
}
});

Entrycard.on('message', async Entrycard => {
if (Entrycard.author.id == '289464872222064651') {
await Entrycard.react('836524031096127529')
}
});

welcometocoffee.on('message', async welcometocoffee => {
if (welcometocoffee.author.id == '289464872222064651') {
await welcometocoffee.react('836524031096127529')
}
})

gifpp.on('message', async gifpp => {
if (gifpp.author.id == '289464872222064651') {
await gifpp.react('836524031096127529')
}
})

client.on('message', async client => {
if (client.author.id == '289464872222064651') {
await client.react('836524031096127529')
}
})




// seyda reaksiyonlari



Barmen.on('message', async Barmen => {
if (Barmen.author.id == '827691786649468980') {
await Barmen.react('836626384204988417')
}
});

FastFood.on('message', async FastFood => {
if (FastFood.author.id == '827691786649468980') {
await FastFood.react('836626384204988417')
}
});

Sinema.on('message', async Sinema => {
if (Sinema.author.id == '827691786649468980') {
await Sinema.react('836626384204988417')
}
});

Garson.on('message', async Garson => {
if (Garson.author.id == '827691786649468980') {
await Garson.react('836626384204988417')
}
});

Cafe.on('message', async Cafe => {
if (Cafe.author.id == '827691786649468980') {
await Cafe.react('836626384204988417')
}
});

BlackCoffee.on('message', async BlackCoffee => {
if (BlackCoffee.author.id == '827691786649468980') {
await BlackCoffee.react('836626384204988417')
}
});

InternetCafe.on('message', async InternetCafe => {
if (InternetCafe.author.id == '827691786649468980') {
await InternetCafe.react('836626384204988417')
}
});

ClupDj.on('message', async ClupDj => {
if (ClupDj.author.id == '827691786649468980') {
await ClupDj.react('836626384204988417')
}
});

Entrycard.on('message', async Entrycard => {
if (Entrycard.author.id == '827691786649468980') {
await Entrycard.react('836626384204988417')
}
});

welcometocoffee.on('message', async welcometocoffee => {
if (welcometocoffee.author.id == '827691786649468980') {
await welcometocoffee.react('836626384204988417')
}
})

gifpp.on('message', async gifpp => {
if (gifpp.author.id == '827691786649468980') {
await gifpp.react('836626384204988417')
}
})

client.on('message', async client => {
if (client.author.id == '827691786649468980') {
await client.react('836626384204988417')
}
})


// umut reaksiyonlri

Barmen.on('message', async Barmen => {
if (Barmen.author.id == '792818330430996520') {
await Barmen.react('834693616483172373')
}
});

FastFood.on('message', async FastFood => {
if (FastFood.author.id == '792818330430996520') {
await FastFood.react('834693616483172373')
}
});

Sinema.on('message', async Sinema => {
if (Sinema.author.id == '792818330430996520') {
await Sinema.react('834693616483172373')
}
});

Garson.on('message', async Garson => {
if (Garson.author.id == '792818330430996520') {
await Garson.react('834693616483172373')
}
});

Cafe.on('message', async Cafe => {
if (Cafe.author.id == '792818330430996520') {
await Cafe.react('834693616483172373')
}
});

BlackCoffee.on('message', async BlackCoffee => {
if (BlackCoffee.author.id == '792818330430996520') {
await BlackCoffee.react('834693616483172373')
}
});

InternetCafe.on('message', async InternetCafe => {
if (InternetCafe.author.id == '792818330430996520') {
await InternetCafe.react('834693616483172373')
}
});

ClupDj.on('message', async ClupDj => {
if (ClupDj.author.id == '792818330430996520') {
await ClupDj.react('834693616483172373')
}
});

Entrycard.on('message', async Entrycard => {
if (Entrycard.author.id == '792818330430996520') {
await Entrycard.react('834693616483172373')
}
});

welcometocoffee.on('message', async welcometocoffee => {
if (welcometocoffee.author.id == '792818330430996520') {
await welcometocoffee.react('834693616483172373')
}
})

gifpp.on('message', async gifpp => {
if (gifpp.author.id == '792818330430996520') {
await gifpp.react('834693616483172373')
}
})

client.on('message', async client => {
if (client.author.id == '792818330430996520') {
await client.react('834693616483172373')
}
})

//abbas

Barmen.on('message', async Barmen => {
if (Barmen.author.id == '772014755337994271') {
await Barmen.react('836630788782555207')
}
});

FastFood.on('message', async FastFood => {
if (FastFood.author.id == '772014755337994271') {
await FastFood.react('836630788782555207')
}
});

Sinema.on('message', async Sinema => {
if (Sinema.author.id == '772014755337994271') {
await Sinema.react('836630788782555207')
}
});

Garson.on('message', async Garson => {
if (Garson.author.id == '772014755337994271') {
await Garson.react('836630788782555207')
}
});

Cafe.on('message', async Cafe => {
if (Cafe.author.id == '772014755337994271') {
await Cafe.react('836630788782555207')
}
});

BlackCoffee.on('message', async BlackCoffee => {
if (BlackCoffee.author.id == '772014755337994271') {
await BlackCoffee.react('836630788782555207')
}
});

InternetCafe.on('message', async InternetCafe => {
if (InternetCafe.author.id == '772014755337994271') {
await InternetCafe.react('836630788782555207')
}
});

ClupDj.on('message', async ClupDj => {
if (ClupDj.author.id == '772014755337994271') {
await ClupDj.react('836630788782555207')
}
});

Entrycard.on('message', async Entrycard => {
if (Entrycard.author.id == '772014755337994271') {
await Entrycard.react('836630788782555207')
}
});

welcometocoffee.on('message', async welcometocoffee => {
if (welcometocoffee.author.id == '772014755337994271') {
await welcometocoffee.react('836630788782555207')
}
})

gifpp.on('message', async gifpp => {
if (gifpp.author.id == '772014755337994271') {
await gifpp.react('836630788782555207')
}
})

client.on('message', async client => {
if (client.author.id == '772014755337994271') {
await client.react('836630788782555207')
}
})


//AZERBAIJAN BOTUM HANSIKI DOGRULATACAGIM BOT ARTIQ BURDAN SONRASI ONA AITDIR //AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN

//AZERBAIJAN BOTUMU TANIMLAMAM

const AZERBAIJAN = new Discord.Client();


AZERBAIJAN.login("ODM3MDU2Njg4OTYzMTkwODA0.YIm_yg.r8kAEQojbUryBsRlQ-VChQuDIh0")

AZERBAIJAN.on("ready",() => {
console.log("Bot Hazır");
var randomMesajlar = ["KONU 3","KONU 2","KONU 1"]
setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    AZERBAIJAN.user.setActivity(`${client.guilds.cache.size} sunucu, ${client.users.cache.size} kişiye hizmet veriyorum!`);}, 3 * 1000);
AZERBAIJAN.user.setStatus("idle");
})




//Azerbaycan 
AZERBAIJAN.on("message" , async message => {

if(message.content==="Azerbaycan")

message.channel.send("Azerbaycan, resmî adıyla Azerbaycan Cumhuriyeti (Azerice: Azərbaycan Respublikası [ˈɑzæɾbɑjdʒɑn ɾespublikasɯ]), Batı Asya ile Doğu Avrupa'nın kesişim noktası olan Kafkasya'da yer alan bir ülke. Güney Kafkasya'nın en büyük yüzölçümüne sahip ülkesi olan Azerbaycan'ın doğusunda Hazar Denizi, kuzeyinde Rusya, kuzeybatısında Gürcistan, batısında Ermenistan ve güneyinde İran ile komşudur. Kendisine bağlı olan Nahçıvan Özerk Cumhuriyeti'nin ise kuzey ve doğusu Ermenistan ile, güneyi ve batısı İran ile çevrilmiştir, Türkiye ile de 17 km'lik sınırı bulunmaktadır.\n\nAzerbaycan, zengin kültürel mirasa sahiptir. Müslümanların çoğunlukta olduğu ülkeler arasında opera, tiyatro gibi sahne sanatlarını barındıran ilk ülke olma özelliğini taşır.[5]\n\nAzerbaycan Demokratik Cumhuriyeti 1918 yılında kurulmuştur, ancak iki yıl sonra 1920, 26 Nisan'da Kızıl Ordu sınırı geçerek Azerbaycan'a girmiş[6], 28 Nisan 1920'de Azerbaycan Sovyet Sosyalist Cumhuriyeti kurulmuş[7] ve ardından Sovyetler Birliği topraklarına katılmıştır.[7] Ülkenin tekrar bağımsızlığını kazanması 1991'de Sovyetler Birliği'nin dağılması ile gerçekleşmiştir.\n\n1991 yılının Eylül ayında, çatışmalı bölge Dağlık Karabağ’daki Ermeni çoğunluk, Dağlık Karabağ Cumhuriyeti’nden ayrılmak istemiş ve SSCB'nin çözülme sürecinde başlayan Birinci Dağlık Karabağ Savaşı 1994 yılında sona ermiştir. Dağlık Karabağ ve onu çevreleyen 7 bölge o zamana kadar uluslararası alanda Azerbaycan’a bağlı kabul edilirken Savaş sonrasında bölge, AGİT öncülüğünde yapılan görüşmeler sonucunda fiilen bağımsız kabul edildi. Dağlık Karabağ Cumhuriyeti, fiilen savaşın sona ermesinden bu yana bağımsız olmasına rağmen, diplomatik anlamda hiçbir devlet tarafından tanınmamaktadır ve Azerbaycan'a bağlı bir de jure bölge olarak kabul edilmektedir.[8][9][10][11] Nitekim 2020 yılında gerçekleşen çatışma sonrasında Dağlık Karabağ ve 7 bölge yeniden Azerbaycan yönetimi altına girdi[12]\n\nAzerbaycan, üniter bir anayasal cumhuriyettir.")
if(message.content != "Burger") return
message.react("heavy_check_mark")

})


//EMBEDLI SISTEMIN BASLANGICI AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN AZERBAIJAN



//PARA BIRIMI
AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "para birimi")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Para Birimi')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Manat, Azerbaycan'da kullanılan para birimidir. Azerbaycan'ın ulusal parası olarak 15 Ağustos 1992’ten Ruble ile yanaşı kullanılmaya başlanılmıştır.[1] 1 Ocak 1994’ten ülkede geçerli olan tek para birimidir.[2]\n\n1 Ocak 2006'dan itibaren 1 Yeni Manat (AZN) 5000 Eski Manat'a (AZM) eşittir. 1 USD yaklaşık 1,70 AZN'dir.\n\nYeni manatın 1, 5, 10, 20, 50, 100'lük ve 200'lük banknotları vardır.[3] 1 manat medeniyeti, 5 manat edebiyatı, 10 manat devletçiliği, 20 manat Karabağ sorununu, 50 manat eğitim ve geleceği, 100 manat ekonomik gelişmeyi gösterir**")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/0/05/1_manat_obv.jpg')
	.setTimestamp()

  )
return false;
});



//islam

AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "islam")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Islam')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Yakın zamana kadar Azerbaycan'da İslam nispeten nominaldi. Azerbaycanlıların büyük çoğunluğu kendilerini Müslüman olarak tanımlasa da, Sovyetlerin sonlarında ve Sovyet sonrası erken dönemlerde yapılan araştırmalar, genel olarak, kendilerini Müslüman olarak görenlerin dörtte birinden daha azının \\\"İslam'ın temel unsurlarını bile anladıklarını\\\" ortaya çıkardı. araştırmacılar Emil Souleimanov ve Maya Ehrmann[2].2000 yılında yapılan bir ankete göre, ankete katılanların yüzde 7'sinden daha azı kendilerini \\\"sağlam inanan\\\" olarak nitelendirirken, sadece yüzde 18'i namaz kıldıklarını itiraf etti (dini dua, İslam'ın temellerinden biri).[kaynak belirtilmeli] İslam, salt dini bir kimlikten daha etnik / milliyetçi bir kimliğe yöneldi.[kaynak belirtilmeli]\nAzerbaycan'daki Müslümanların tahminen beşte dördü Twelver şubesinin Şialarıdır. Geri kalanlar Hanefi koluna mensup Sünnilerdir ve esas olarak cumhuriyetin kuzey ve batı bölgelerinde yaşarlar. Halk İslamı yaygın olarak uygulanmaktadır, ancak organize bir Sufi hareketine dair çok az kanıt vardır.**")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/7/7c/Bibi_Heybat_Mosque_Baku_1.jpg')
	.setTimestamp()

  )
return false;
});


//spor

AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "spor")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Spor')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Azerbaycan'da sporun kökleri eskiye dayanır ve günümüzde bile geleneksel ve modern sporlar hâla uygulanmaktadır. Serbest güreş geleneksel olarak Azerbaycan'ın millî sporu olarak kabul edilir, ancak bugün Azerbaycan'da en popüler sporlar futbol ve satrançtır.[1] Diğer popüler sporlar ise jimnastik, judo, futsal, halter ve bokstur.[2] Azerbaycan'ın dağlık arazisi, kayak ve dağcılk gibi spor dallarında büyük fırsatlar sunmaktadır. Hazar Denizi ve ülke içi sularda su sporları yapılmaktadır. Rekabetçi bir şekilde, Azerbaycan uluslararası düzeyde satranç, halter ve güreşte çok başarılı olmuştur. Azerbaycan aynı zamanda uluslararası spor topluluklarının aktif bir üyesidir ve FIFA, UEFA, Uluslararası Atletizm Federasyonları Birliği (IAAF), Avrupa Atletizm Birliği (EAA) üyesidir, Uluslararası Olimpiyat Komitesi'de (IOC) bu üyelikler arasında yer almaktadır.**")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://images.carnegieendowment.org/images/article_images/2015-06-11_Azerbaijan_605.jpg')
	.setTimestamp()

  )
return false;
});

//sinema

AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "sinema")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Sinema')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Azerbaycan sineması, Azerbaycan'da sinemaya dair faaliyetleri ve sinema kültürünü kapsar.\n\nŞimdiye kadar Azerbaycan'da 3000'den fazla film çekilmiştir. Bunlardan 300 kadarı uzun metraj sinema filmi, 100'den fazlası kısa metraj sinema filmi, 20'den fazlası uzun metraj televizyon sinema filmi, 30'dan çoğu kısa metraj televizyon sinema filmi, 20 kadarı dizi, 10 kadarı uzun metraj müzikal, 100'den fazlası televizyon tiyatro oyunu, 50 kadarı televizyon sinema-tiyatro oyunu, 100 kadarı çizgi film, 20 kadarı televizyon çizgi film, 50 kadarı uzun metraj belgesel, 1100'den çoğu kısa metraj belgesel, 20 kadarı uzun metraj televizyon belgeseli, 600'den fazlası ise kısa metraj televizyon belgeselidir.**")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Azerbaijan_film_clapperboard.svg/1024px-Azerbaijan_film_clapperboard.svg.png')
	.setTimestamp()

  )
return false;
});

//himn


AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "mars")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Himn')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Azerbaycan Ulusal Marşı (Azerice: Azərbaycan himni), Azerbaycan'ın ulusal marşıdır. Güftesi Şair Ahmed Cevad, bestesi ise Üzeyir Hacıbeyov tarafından yapılmıştır.[1][2]\n\n\n\n\"Azerbaycan Marşı\" bestecisi Üzeyir Hacıbeyov (solda) ve söz yazarı Ahmed Cevad (sağda)\n\nBir posta pulu üzerinde bulunan Azerbaycan Ulusal Marşı\n\n5 manat'ın ön yüzünde bulunan Azerbaycan Ulusal Marşı\n\t\nVikikaynak'ta Azerbaycan Ulusal Marşı\nile ilgili metin bulabilirsiniz.\nHükûmet, 1920 yılında \"Azerbaycan Cumhuriyeti Devlet İlahisi Üzerine\" kararnamesiyle birlikte marşı resmen kabul etti. 1992'de Sovyetler Birliği'nin dağılmasının ardından Azerbaycan hükûmeti Azərbaycan Marşı'nı milli marş olarak yeniden restore etti. Ayrıca marş, \"Azerbaycan devletinin, bağımsızlığının ve birliğinin kutsal simgesi\" olarak ilan edilmiştir.\n\n2006 yılından bu yana Azerbaycan 5 manat banknotunun ön yüzünde milli marşın sözlerinden bir parça yer almaktadır. 2011 yılında, Azerbaycan'ın Sovyet yönetiminden bağımsızlığının 20. yılını kutlamak için marşın yazılı olduğu bir pul basıldı**")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Stamps_of_Azerbaijan%2C_2011-991.jpg/800px-Stamps_of_Azerbaijan%2C_2011-991.jpg')
	.setTimestamp()

  )
return false;
});

//bayrag


AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "bayrak")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Bayrag')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Azerbaycan bayrağı hakkındaki ilk kararı Azerbaycan Demokratik Cumhuriyeti hükûmeti tarafından 1918'de alınmıştır. Buna göre, Azerbaycan bayrağı mavi gök rengi, kırmızı ve yeşil yatay şeritlerden oluşmuştur ve kırmızı zemin üzerinde beyaz renkte sağa bakan bir hilal ve sekiz köşeli bir yıldız (Rub El Hizb رب الحزب‎) bulunmaktadır. Bayrak 1:2 boyuttadır.\n\nBayraktaki mavi renk Türklüğü, yeşil renk İslamiyeti, kırmızı renk ise uygarlığı temsil etmektedir.[1] Resmi renkler ve boyut 5 Şubat 1991 tarihinde kabul edilmiştir.[2] **")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png')
	.setTimestamp()

  )
return false;
});

//gerb


AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === "arma")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Gerb')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://data.whicdn.com/images/192502840/original.gif', 'https://data.whicdn.com/images/192502840/original.gif')
	.setDescription("**Azerbaycan arması, Azerbaycan'ın resmî devlet armasıdır. 1993 yılından beri kullanılmaktadır. Kalkanın içerisindeki dairesel mavi, kırmızı ve yeşil renkler Azerbaycan bayrağında belirtilen Türklüğü, çağdaşlığı ve İslam'ı simgeler. Kalkanın ortasında bulunan sekiz kollu yıldız güneşin simgesidir. Yıldızın merkezinde yer alan ateş “Odlar Yurdu” olan Azerbaycan'ı temsil eder.[1].**")
	.setThumbnail('https://futureofworkreview.com/wp-content/uploads/2018/06/1024x640-Future-of-work-gif.gif')
	
	.addField('Melumatlar Vikipediadan Alinib', 'Suanlik Turkce Dil Desteyi Bulunmakta', true)
	.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Emblem_of_Azerbaijan_%28simmetric%29.svg/800px-Emblem_of_Azerbaijan_%28simmetric%29.svg.png')
	.setTimestamp()

  )
return false;
});

//.help yardim komutu

AZERBAIJAN.on('message', message => {
  if(message.content.toLowerCase() === ".help")
  message.channel.send(
    new Discord.MessageEmbed()

	.setColor('RANDOM')
	.setTitle('Yardım')
	.setURL('https://discord.js.org/')
	.setAuthor('Azerbaijan', 'https://sceenius.com/wp-content/uploads/2015/06/giphy.gif', 'https://sceenius.com/wp-content/uploads/2015/06/giphy.gif')
	.setDescription("**<a:1wec:837357858878259210> Arma\n\n<a:1wec:837357858878259210> Bayrak\n\n<a:1wec:837357858878259210> Mars\n\n<a:1wec:837357858878259210> Sinema\n\n<a:1wec:837357858878259210> Spor\n\n<a:1wec:837357858878259210> Islam\n\n<a:1wec:837357858878259210> Para birimi**\n\n <a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988><a:sdsd:837986178556755988>")
	.setThumbnail('https://i.pinimg.com/originals/0e/10/d3/0e10d3b395a665d5c77e38fa5dcaf378.gif')
	
	
	.setImage('https://i.imgur.com/IRgA41z.gif')
	.setTimestamp()
.addField(`<a:sdsdsdsdcc:837999537242767382>`, `[Destek Sunucumuz](https://discord.gg/RhjqbJG5C2)`)
 .addField(`<a:scsc:837999865224233001>`, `[Botu Sunucuna Eklemek Istersen](https://discord.com/oauth2/authorize?client_id=837056688963190804&scope=bot&permissions=8)`)
  )
return false;
});





