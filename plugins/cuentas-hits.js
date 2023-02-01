import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menus/Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `LISTE DE MENU`,
rows: [
      {title: "🥵 CREATOR 🥵", description: 'CONTACT CREATOR', rowId: `${usedPrefix}creador`},
      {title: "🎁 MENU COMPLETE 🎁", description: 'THIS IS THE COMPLETE MENU OF THE BOT', rowId: `${usedPrefix}memucomp`},
      {title: "💎 MENU GROUPE 💎", description: 'THIS IS THE MENU GROUPE OF THE BOT', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 MENU GAMES 🎮", description: 'THIS IS THE MENU GAMES OF THE BOT', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 MENU AUDIO 🔊", description: 'THIS IS THE MENU AUDIO OF THE BOT', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 MENU STICKERS 👽", description: 'THIS IS THE MENU STICKER OF THE BOT', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 EFFECTS AUDIO 🎤", description: 'THIS IS THE MENU EFFECTS AUDIO', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 MENU RANDOM 👾", description: 'THIS IS THE MENU RENDOM OF THE BOT', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 MENU NSFW 🔞", description: 'THIS IS THE MENU NSFW OF THE BOT🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 MENU DOWNLOAD 📲", description: 'THIS IS THE MENU DOWNLOAD OF THE BOT', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ MENU LOGS 🖍️", description: 'THIS IS THE MENU LOGS OF THE BOT', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 MENU SEARCHES 🔍", description: 'THIS IS THE MENU SEARCHES', rowId: `${usedPrefix}menubusquedas`},
{title: "⚒️ MENU TOOLS ⚒️", description: 'THIS IS THE MENU TOOLS OF THE BOT', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 MENU CREATOR 👑", description: 'THIS IS THE MENU CREATOR OF THE BOT', rowId: `${usedPrefix}menucreador`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*📅 DATE: ${week}, ${date}*
*📈 ACTIVE TIME: ${uptime}*
*📊 USER REGISTERED : ${rtotalreg}*
__________________________________________
🌟DROP OF ACCOUNTS🌟
⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘ 
•SurfShark vpn
📨 keithp.guest@gmail.com
🔐 Ozorep1202!
Disney Plus (No Hit)
📨 Keit51_5@outlook.com
🔐 Ozorep1202!
•Crunchyroll Premium (No Hit)
📨 ffypsvupaybdnj@arxxwalls.com
📨 xiqavblxgxejjbg@arxxwalls.com
🔐 premium321
•Spotify Premium (3 meses)
📨 hbinsd_n230h@xuge.life
📨 carlo28a_m710u@chyju.com
🔐 premi321
•Scribd Premium
📨 egreent_b308o@yefx.info
📨 milanyoool16@gmail.com
🔐 regalo@Kp1202
📍| Remember to Activate Notifications ✅
⋙▬▬▬▬▬▬★▬▬▬▬▬▬⋘
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LISTE DE MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(hits|\?)$/i
handler.exp = 50
handler.limit = 2
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
