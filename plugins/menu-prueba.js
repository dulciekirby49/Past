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
 	]
    },
    {
        title: "DARK SIDE",
	rows: [    
	      {title: "CUENTAS", description: 'CUENTAS PREMIUM', rowId: `${usedPrefix}cuentas`},
	       	]
	        },
    {
        title: "SOCIAL NETWORKS",
	rows: [    
	      {title: "NETWORKS", description: 'Follow me on all my networks', rowId: `${usedPrefix}redes`},
                ]
	        },
    {
        title: "MEDIUM TECHNICAL",
	rows: [    
	      {title: "GROUPE", description: 'GOUPE MEDIUM', rowId: `${usedPrefix}grupos`},
	       	]
                },
    {
	title: "OWNER",
	rows: [
                {title: "UPDATE", description: 'UPDATE BOT', rowId: `${usedPrefix}update`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `*╭─────────────────────❊*
*│* *╭────────────────❊*
*│* *│* *Bot Name :  Houssam - Bot*
*│* *│* *Creator Of Bot: Houssam* 
*│* *│* *N° del Creator:* wa.me/21272215449 (No bot)*
*│* *│* *All Right reserved by Houssam*
*│* *│* *All My Links: https://solo.to/houssamatfi*
*│* *╰────────────────❊*
*│*    *㊏───INFO───㊏*
*│* *╭─────────────────❊*
*│* *│* *NAME :* ${name}
*│* *│* *STATUS: ${prem ? '🎫 Premium':'Free'}*
*│* *│* *BALANCE : ${limit}*
*│* *│* *RUNNING ON: AcidicNodes*
*│* *│* *MODE : Public✅*
*│* *│* *DATE : ${week}, ${date}*
*│* *│* *TIME : ${uptime}*
*│* *│* *TOTAL USER : ${rtotalreg}*
*│* *╰─────────────────❊*
*╰─────────────────────❊*`, footer: `${wm}`, pp,
title: null,
buttonText: "LISTE DE MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menuprueba|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
