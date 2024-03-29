import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] ENTER THE NAME OF ANY ANIME YOU WANT TO SEARCH*`
try {
let res = await fetch(global.API('https://api.jikan.moe', '/v4/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
const tld = 'cn'
let resultes = await translate(`${synopsis}`, { to: 'es', autoCorrect: true })
let animeingfo = `✨ *Titulo:* ${title}
🎆 *Episodes:* ${episodes}
💬 *Transmitted en:* ${type}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Members:* ${members}
💚 *Synopsis:* ${resultes.text}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
} catch {    
let res = await fetch(global.API('https://api.jikan.moe', '/v4/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = `✨ *Titulo:* ${title}
🎆 *Episodes:* ${episodes}
💬 *Transmitted en:* ${type}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Members:* ${members}
💚 *Synopsis:* ${synopsis}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
}}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
export default handler
