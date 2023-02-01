import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗] ENTER THE NAME OF THE APK YOU WANT TO SEARCH*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/es?apikey=85faf717d0545d14074659ad&text=${gPlay.descripcion}`)
let loll = await lol.json()
let mystic = loll.result.translated
if (!gPlay.titulo) return m.reply(`[ ! ] Without results`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 Resultado: ${gPlay.titulo}
🧬 Identifier: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Picture: ${gPlay.imagen}
✍️ Developer: ${gPlay.desarrollador}
📜 Description: ${mystic}
💲 Currency: ${gPlay.moneda}
🎭 Free?: ${gPlay.gratis}
💸 Price: ${gPlay.precio}
📈 Punctuation: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*[❗INFO❗] ERROR, PLEASE TRY AGAIN*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
