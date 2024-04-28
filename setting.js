//HANYA BOT  YANG SUKA ERROR ERROR 🗿

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner ="6287852395505"
global.nomerOwner2 = "6287852395505"
global.ownerName = "Zakk"
global.namabot = "© Zex-ID V²"
global.botName = "© Zex Simple WhatsApp Bot"
global.autoJoin = true
global.sessionName = 'session' 
global.pairing = '601161736614'
global.packName = "Created By"
global.authorName = "Zex-ID V²"
global.namastore = "Kosong"
global.nodana = "-"
global.nogopay = "-"
global.noovo = "-"
global.qris = "-"
global.TextT = `Null` 
global.textT = `Null` 

global.sgc = 'https://chat.whatsapp.com/GtFwrS0TqnA0FQ7xmrRUih'
global.syt = 'https://youtube.com/@kizakixd'
global.sig = 'https://instagram.com/iamkizakixd'
const mess = {
wait: '_Sedang Di Proses Mohon Di Tunggu..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!'
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