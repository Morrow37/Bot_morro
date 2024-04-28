const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
const { runtime } = require('../lib/myfunc')

exports.allmenu =  ( isPremium,thisHit, sender, prefix, pushname) => {

return `Hi @${sender.replace(/@.+/g, '')}
I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.

 ◦  *Library:* Baileys
 ◦  *Uptime:* ${runtime(process.uptime())}
 ◦  *Instagram:* https://instagram.com/iamkizakixd
 
┌  ◦ *Name* : ${pushname}
│  ◦ *Status* : ${isPremium ? 'Premium':'Free'}
│  ◦ *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
└  ◦ *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}`}

exports.fitur = (prefix) => {
return`

❍┈┈「 *MENU GROUP* 」
╎
╎• setnamegc
╎• setdesc
╎• setppgc 
╎• infogc
╎• getppgc
╎• cekmember
╎• closegroup
╎• opengroup
╎• hidetag
╎• tagall
╎• promote
╎• demote
╎• kick
╎• add
╎• resetlinkgc
╎• linkgc
╎• ban
╎• unban
╎• listgc
╎• afk
╎• delete
╎• profil
╎• intro
╎• topbalance
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU DOWNLOAD* 」
╎
╎• play
╎• playmp4
╎• ytmp3
╎• instagram
╎• ttpoto
╎• tiktok
╎• ttaudio
╎• song
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TOOLS* 」
╎
╎• translate
╎• kalkulator
╎• nobg
╎• pinterest
╎• gimage
╎• remini
╎• jarak 
╎• get
╎• flaming1 - 6
╎• wattpad
╎• playstore
╎• brainly
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *PRIMBON MENU* 」
╎
╎• meaning of name
╎• meaning of dreams
╎• partner compatibility
╎• love predictions
╎• name match
╎• get married
╎• nature of business
╎• sustenance
╎• work
╎• fate
╎• disease
╎• artitarot
╎• feng shui
╎• good day
╎• harisangar
╎• daily
╎• harinaga
╎• luck
╎• weton
╎• character
╎• Masasubur
╎• zodiac
╎• fragrant
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STICKER* 」
╎
╎• s
╎• smeme
╎• swm
╎• qc
╎• but
╎• attp
╎• mukelu
╎• gurastick
╎• lovestick
╎• dogestick
╎• paimon
╎• tele
╎• cry
╎• kill
╎• hug
╎• pat
╎• lick
╎• kiss
╎• bite
╎• yeet
╎• bullying
╎• bonk
╎• wink
╎• poke
╎• nom
╎• slap
╎• smile
╎• waves
╎• awoo
╎• blush
╎• smug
╎• glomp
╎• happy
╎• dance
╎• cringe
╎• cuddle
╎• high five
╎• handhold
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *FUN MENU* 」
╎
╎• bucinserti
╎• girlfriendcertificate
╎• tollolcertificate
╎• can
╎• how
╎• whether
╎• when
╎• character check
╎• checkhobby
╎• check with the secretary
╎• check the cock
╎• cebelapaimutciaku
╎• tiktokghea
╎• tiktokpanrika
╎• tiktokbocil
╎• tiktokkayes
╎• cosplayangel
╎• video confusion
╎• wibuvid
╎• chinese
╎• hijab
╎• indo
╎• japanese
╎• korean
╎• malay
╎• randomgirl
╎• randomboy
╎• thai
╎• Vietnamese
╎• cecan
╎• cogan
╎• hackers
╎• pubg
╎• doll
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *GAME MENU* 」
╎
╎• charades
╎• mathematics
╎• puzzles
╎• word order
╎• guess chemistry
╎• guess the picture
╎• guess the lyrics
╎• caklontong
╎• family100
╎• guess the lyrics
╎• shop
╎• claims
╎• transfer
╎• limits
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *ANONYMOUS* 」
╎
╎• confe
╎• menfes
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU CONVERT* 」
╎
╎• language code
╎• tts
╎• toimg
╎• tovn
╎• tovideo
╎• tomp3
╎• togif
╎• tourl
╎• reversed
╎• bass
╎• deep
╎• earrape
╎• fast
╎• fat
╎• nightcore
╎• reverse
╎• robots
╎• slow
╎• smooth
╎• squirrel
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *ISLAMIC MENU* 」
╎
╎• story of the prophet
╎• Koran
╎• Islamic
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *ANIME MENU* 」
╎
╎• anime
╎• randomanime
╎• naotomory
╎• loli
╎• cosplay
╎• husbu
╎• milf
╎• wallml
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TEXT PRO* 」
╎
╎• pornhub
╎• glitch
╎• avengers
╎• space
╎• ninjalogo
╎• marvelstudio
╎• lionlogo
╎• wolflogo
╎• steel3d
╎• wallgravity
╎• blackpink
╎• neon
╎• greenneon
╎• advanceglow
╎• futureneon
╎• sandwriting
╎• sandsummer
╎• sandengraved
╎• metaldark
╎• neon lights
╎• holographic
╎• text1917
╎• minions
╎• deluxesilver
╎• newyearcard
╎• bloodfrosted
╎• halloween
╎• jokerlogo
╎• fireworksparkle
╎• natureleaves
╎• bokeh
╎• toxic
╎• strawberries
╎• bok3d
╎• breakwalls
╎• icecold
╎• luxury
╎• cloud
╎• summersand
╎• horrorblood
╎• thunder
╎
❍┈┈「 *RANDOM MENU* 」
╎
╎• nsfw
╎• wallpapers
╎• memeindo
╎• ppcp
╎• rhymes
╎• motivation
╎• words of wisdom
╎• dilanquote
╎• truth
╎• dare
╎• weather info
╎• mountains
╎• programming
╎• technology
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU SETTINGS* 」
╎
╎• setbio
╎• setppbot
╎• setnamebot
╎• clearsession
╎• rubbish
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STORAGE* 」
╎
╎• addvn
╎• delvn
╎• listvn
╎• addimage
╎• delimage
╎• listimage
╎• addvideo
╎• delvideo
╎• listvideo
╎• addstickers
╎• delsticker
╎• liststickers
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *OWER MENU* 」
╎
╎• getcase
╎• addprem
╎• delprem
╎• public
╎• self
╎• add rent
╎• rental list
╎• rent check
╎• bcgc
╎• join
╎• joincall
╎• adderror
╎• error
╎• clearerror
╎• listerror
╎• addcmdowner
╎• delcmdowner
╎• listcmdowner
╎• addcmdprem
╎• delcmdprem
╎• listcmdprem
╎• addcmdlimit
╎• delcmdlimit
╎• listcmdlimit
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})


