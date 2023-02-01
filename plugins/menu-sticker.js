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

let pp = './Menu2.jpg'
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
      {title: "🎁 MENU COMPLETE 🎁", description: 'THIS IS THE COMPLETE MENU OF THE BOT', rowId: `${usedPrefix}allmenu`},
      {title: "💎 MENU GROUPE 💎", description: 'THIS IS THE GROUPE MENU OF THE BOT', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 MENU GAMES 🎮", description: 'THIS IS THE GAMES MENU OF THE BOT', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 MENU AUDIO 🔊", description: 'THIS IS THE AUDIO MENU OF THE BOT', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 MENU STICKERS 👽", description: 'THIS IS THE STICKERS MENU OF THE BOT', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 EFFECTES AUDIO 🎤", description: 'THIS IS THE EFFECTES AUDIO MENU OF THE BOT', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 MENU RANDOME 👾", description: 'THIS IS THE RANDOME MENU OF THE BOT', rowId: `${usedPrefix}menurandom`},
      {title: "📲 MENU DISCHARGES 📲", description: 'THIS IS THE DISCHARGES MENU OF THE BOT', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ MENU LOGS 🖍️", description: 'THIS IS THE NSFW LOGS OF THE BOT', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 MENU SEARCHES 🔍", description: 'THIS IS THE SEARCHES MENU OF THE BOT', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ MENU TOOLS ⚒️", description: 'THIS IS THE NSFW TOOLS OF THE BOT', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 MENU CREATOR 👑", description: 'THIS IS THE CREATOR MENU OF THE BOT', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HELOO _${name}_ 💖彡*
WELCOME TO MENU STICKERS
┏━━━━━━━━━━━━━┓
┃ *<STICKERS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟👽 _${usedPrefix}sticker *<reply to image or video>*_
┣° ඬ⃟👽 _${usedPrefix}sticker *<link / link / url>*_
┣° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
┣° ඬ⃟👽 _${usedPrefix}s *<link / link / url>*_
┣° ඬ⃟👽 _${usedPrefix}sfull *<reply to image or video>*_
┣° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣° ඬ⃟👽 _${usedPrefix}scircle *<responder a imagen>*_
┣° ඬ⃟👽 _${usedPrefix}sremovebg *<responder a imagen>*_
┣° ඬ⃟👽 _${usedPrefix}semoji *<type> <emoji>*_
┣° ඬ⃟👽 _${usedPrefix}attp *<text>*_
┣° ඬ⃟👽 _${usedPrefix}attp2 *<text>*_
┣° ඬ⃟👽 _${usedPrefix}attp3 *<text>*_
┣° ඬ⃟👽 _${usedPrefix}ttp *<text>*_
┣° ඬ⃟👽 _${usedPrefix}ttp2 *<text>*_
┣° ඬ⃟👽 _${usedPrefix}ttp3 *<text>*_
┣° ඬ⃟👽 _${usedPrefix}ttp4 *<text>*_
┣° ඬ⃟👽 _${usedPrefix}ttp5 *<text>*_
┣° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
┣° ඬ⃟👽 _${usedPrefix}slap *<@tag>*_
┣° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
┣° ඬ⃟👽 _${usedPrefix}dado_
┣° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
┣° ඬ⃟👽 _${usedPrefix}stickermarker *<efect> <reply to image>*_
┣° ඬ⃟👽 _${usedPrefix}stickerfilter *<efect> <reply to image>*_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LISTE DE MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menusticker|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
