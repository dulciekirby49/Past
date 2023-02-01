import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗INFO❗] EXAMPLE OF CORRECT USE OF THE COMMAND: ${usedPrefix + command} Beret Ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
TITLE: *${result.title}*
AUTOR ${result.author}


${result.lyrics}


URL ${result.link}
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['DOWNLOAD AUDIO', `/play.1 ${text}`],
['DOWNLOAD VIDEO', `/play.2 ${text}`]
], m)
} catch (e) {
m.reply('*[❗INFO❗] ERROR , PLEASE TRY AGAIN*')
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
