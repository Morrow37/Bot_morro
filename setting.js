//HANYA BOT  YANG SUKA ERROR ERROR 🗿

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner ="212654753614"
global.nomerOwner2 = "212654753614"
global.ownerName = "Morro"
global.namabot = "© aqua"
global.botName = "© aqua Simple WhatsApp Bot"
global.autoJoin = true
global.sessionName = 'session' 
global.pairing = '601161736614'
global.packName = "Created By"
global.authorName = "AQUA V²"
global.namastore = "Kosong"
global.nodana = "-"
global.nogopay = "-"
global.noovo = "-"
global.qris = "-"
global.TextT = `Null` 
global.textT = `Null` 

global.sgc = 'https://chat.whatsapp.com/'
global.syt = 'https://youtube.com/'
global.sig = 'https://www.instagram.com/morro_ghost7/'
const mess = {
wait: '_In Process Please Wait..._',
query: 'Enter query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Succeed!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕]Your limit has run out, please type .limit to check the limit',
claimOn: 'You have made a claim before, please claim again at this time',
wrongFormat: 'Incorrect format, try looking again in the menu',

error: {
stick: 'not that sticker :v',
api: 'Possible api or link error',
Iv: 'The link is error:v',
link : "Link error!"
},
block:{
Bowner: `Sorry, the command is under construction, try again tomorrow.`,
Bsystem: `The command has been blocked by the system because it occurreddi error`
},
only: {
prem : 'Sorry Sis, but this feature can only be used by premium users',
group: 'This feature can be used in groups!',
ownerB: 'Owner Bot special features!',
owner: 'Sorry Sis, this is a special feature for my owner!!!',
admin: 'Feature can be used by group admins!',
Badmin: 'Make aqua Admin First!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/241d7180c0283ab401434.jpg",
    "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",
    "https://telegra.ph/file/392b8c8e8e881ae188754.jpg",
    "https://telegra.ph/file/26abe0a835fe5d4cc2e41.jpg",
    "https://telegra.ph/file/a2b84d6ab76d01cefa658.jpg",
   
    ]
// Apikey 
global.api = {
ehz: '', // Isi Api Skizo, Register Aja Free : https://wa.me/+62882-1243-01380?text=%0AMin%20Req%20Apikey%20%F0%9F%99%82%E2%80%8D%E2%86%94%EF%B8%8F%F0%9F%99%82%E2%80%8D%E2%86%95%EF%B8%8F%0A%0ACustomApikey:%20_____%20%F0%9F%9A%80%F0%9F%94%A5%0AStarter%20Plan:%20%E2%9C%85%0APremium%20Plan:%20%E2%9D%8E%0AVip%20Plan:%20%E2%9D%8E%0A%0Aharga:%200
angel: 'zenzkey_af003aedbf',
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
