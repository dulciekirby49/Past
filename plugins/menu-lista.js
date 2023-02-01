import fetch from 'node-fetch'
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
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `┏「 DATA - COVID19 」┓
┃➲ positive cases : ${CovidApi.casos}
┃✯ recovered : ${CovidApi.recuperados}
┃❥ treaties : ${CovidApi.activo}
┃✞ Deceased : ${CovidApi.muertes}
┃⍟Houssam » 𝗕𝗼𝘁⍟ V1.0
┗─━─━「 🌎 」━─━─┛\n\n`
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = cotext
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
      {title: "👑 SER BOT 👑", description: 'USE JADI BOT TO HAVE THE BOT ON YOUR NUMBER', rowId: `${usedPrefix}menuserbot`},
 	]
    },
    {
        title: "SOCIAL MEDIA",
	rows: [    
	      {title: "NETWORKS", description: 'FOLLOW ME ON ALL MY NETWORKS', rowId: `${usedPrefix}redes`},
                ]
	        },
    {
        title: "GROUPE",
	rows: [    
	      {title: "GROUPE", description: 'GROUPE OF THE BOT', rowId: `${usedPrefix}linkgc`},
	       	]
                },
	    {
        title: "COLLABORATORS",
	rows: [    
	      {title: "COLLABORATORS", description: 'COLLABORATORS OF BOT', rowId: `${usedPrefix}colaboradores`},
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
*│* *│* *N° Of Creator:* wa.me/212672215449*
*│* *│* *Support me on PayPal*
*│* *│* *https://www.paypal.com/paypalme/houssamatfi*
*│* *│* *All My Links : https://solo.to/houssamatfi*
*│* *│* ${(conn.user.jid == global.conn.user.jid ? '' : `Houssambot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*OF Bot*'}
*│* *╰────────────────❊*
*│*    *㊏───INFO───㊏*
*│* *╭─────────────────❊*
*│* *│* *NAME :* ${name}
*│* *│* *BALANCE:* ${limit}
*│* *│* *RUNNING ON ᴏɴ: AcidicNodes*
*│* *│* *MODE: Publice✅*
*│* *│* *DATE:* ↘️
*│* *│* *${week}, ${date}*
*│* *│* *TIME: ${uptime}*
*│* *│* *TOTAL USER: ${rtotalreg}*
*│* *╰─────────────────❊*
*╰─────────────────────❊*`, footer: `${wm}`, pp,
title: null,
buttonText: "⍟LISTE DE MENU⍟", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|2help|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}