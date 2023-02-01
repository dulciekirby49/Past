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
text: `*ミ💖 HELOO _${name}_
WELCOME TO MENU GAMES 💖彡*
┏━━━━━━━━━━━━━┓
┃ *<MENU GAMES/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🎖️ _${usedPrefix}top *text*_
┣ 🎖️ _${usedPrefix}topgays_
┣ 🎖️ _${usedPrefix}topguap@s_
┣ 🎖️ _${usedPrefix}topput@s_
┣ 🎖️ _${usedPrefix}toppajer@s_
┣ 🎖️ _${usedPrefix}topotakus_
┣ 🎖️ _${usedPrefix}topfe@s_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<MENU GAMES/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🕹 _${usedPrefix}math *way*_
┣ 🎮 _${usedPrefix}ttt *room name*_
┣ 🕹 _${usedPrefix}delttt *room name*_
┣ 🎮 _${usedPrefix}multijuegos_
┣ 🕹️ _${usedPrefix}random *text*_
┣ 🎮 _${usedPrefix}minovio *@tag*_
┣ 🕹️ _${usedPrefix}2gay *@tag*_
┣ 🎮 _${usedPrefix}gay *@tag / nombre*_
┣ 🕹️ _${usedPrefix}lesbi *@tag / nombre*_
┣ 🎮 _${usedPrefix}pajer@ *@tag / nombre*_
┣ 🕹️ _${usedPrefix}put@ *@tag / nombre*_
┣ 🎮 _${usedPrefix}rata *@tag / nombre*_
┣ 🕹️ _${usedPrefix}manc@ *@tag / nombre*_
┣ 🎮 _${usedPrefix}prostitut@ *@tag / nombre*_
┣ 🕹️ _${usedPrefix}follar *@tag / nombre*_
┣ 🎮 _${usedPrefix}pfollar *@tag / nombre*_
┣ 🕹️ _${usedPrefix}ship(random)_
┣ 🕹️ _${usedPrefix}ship *@tag* *@tag*_
┣ 🎮 _${usedPrefix}bot *texto*_
┣ 🕹️ _${usedPrefix}love *@tag / nombre*_
┣ 🎮 _${usedPrefix}slot *(xp bet)*_
┣ 🕹 _${usedPrefix}ppt *stone / paper / scissors*_
┣ 🎮 _${usedPrefix}ñengo *suit @user*_ (ppt PvP)
┣ 🕹️ _${usedPrefix}cancion *guess song*_
┣ 🎮 _${usedPrefix}ñengo *guess ñengo song*_
┣ 🕹️ _${usedPrefix}pista *song name track*_
┣ 🎮 _${usedPrefix}acertijo_
┣ 🕹️ _${usedPrefix}zodiac *AAAA MM DD*_
┣ 🕹️ _${usedPrefix}cuando *text*_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LISTE DE MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menujuegos|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
