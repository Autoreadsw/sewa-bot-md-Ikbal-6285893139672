//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='session'

//owmner v card
global.ytname = "Kagak Punya :v" //ur yt chanel name
global.socialm = "Private" //ur github or insta name
global.location = "Indonesian" //ur location

//new
global.botname = 'Ikell' //ur bot name
global.ownernumber = '6285893139672' //ur owner number
global.ownername = 'Ikbal' //ur owner name
global.websitex = "wa.me/6285893139672"
global.wagc = "https://chat.whatsapp.com/D0GWMlupOZlEijH0hIdh0W"
global.themeemoji = '🗿'
global.wm = "Ikbal"
global.botscript = 'https://chat.whatsapp.com/D0GWMlupOZlEijH0hIdh0W' //script link
global.packname = "Sticker By"
global.author = "Ikkel\n+6285893139672"
global.creator = "6285893139672@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285893139672"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go🗿'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
