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
      {title: "🎁 MENU COMPLETE 🎁", description: 'THIS IS THE COMPLETE MENU OF THE BOT', rowId: `${usedPrefix}memucomp`},
      {title: "🌠 HBO 🌠", description: 'ACCOUNTS OF HBO', rowId: `${usedPrefix}hbo`},
      {title: "🏰 DISNEY 🏰", description: 'ACCOUNTS OF DISNEY', rowId: `${usedPrefix}disney`},
      {title: "🌏 VPN 🌏", description: 'ACCOUNTS OF KEEPSOLID SEIS 𝗠𝗘𝗦𝗘𝗦', rowId: `${usedPrefix}vpn`},
      {title: "🧑CANVA PRO🧑", description: 'ACCOUNTS OF CANVA 𝗣𝗥𝗘𝗠𝗜𝗨𝗠', rowId: `${usedPrefix}canva`},
      {title: "🟥NETFLIX🟥", description: 'ACCOUNTS OF NETFLIX', rowId: `${usedPrefix}netflix`},
      {title: "🔊 MUSIC 🔊", description: 'ACCOUNTS OF MUSIC', rowId: `${usedPrefix}musica`},
      {title: "💥 HITS 💥", description: 'HITS VARIADOS', rowId: `${usedPrefix}hits`},
      {title: "🎚️ ACORNTV 🎚️", description: 'ACCOUNTS OF ACORN TV', rowId: `${usedPrefix}acorntv`},
      {title: "⚡ CRUNCHIRROL ⚡", description: 'ACCOUNTS OF CRUNCHIRROL', rowId: `${usedPrefix}crunchirrol`},
      {title: "✴️ STAR ✴️", description: 'ACCOUNTS OF STAR', rowId: `${usedPrefix}star`},
      {title: "📲 CLARO VIDEO 📲", description: 'ACCOUNTS OF CLARO VIDEO', rowId: `${usedPrefix}clarovideo`},
      {title: "📖 SCRIBD 📖", description: 'CRUNCHIRROL SCRIBD', rowId: `${usedPrefix}scribd`},
      {title: "🪙 COMPRAR 🪙", description: 'ACOUNTS OF COMPRAR', rowId: `${usedPrefix}comprar4`},
      {title: "⚒️ MENU TOOLS ⚒️", description: 'THIS IS THE TOOLS MENU OF THE BOT', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 MENU CREATOR 👑", description: 'THIS IS THE CREATOR MENU OF THE BOT', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*📅 DATE: ${week}, ${date}*
*📈 ACTIVE TIME: ${uptime}*
*📊 USER REGISTRED : ${rtotalreg}*
*_________________________________________*
*Remember not to change passwords to accounts*
*If you log in, thank you with cap*
*Share the link of the group*
*ALL ACCOUNTS OFERED*
https://billing.acidicnodes.ml/register?ref=nSzLjTPd
*_________________________________________*`, footer: `${wm}`, pp,
title: null,
buttonText: "LISTE DE MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(cuentas|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
