import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/DarkSide.m4a'
let chat = global.db.data.chats[m.chat]
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Shizu - Bot', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^futbol$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*HELOO, DOWNLOAD FUTGOL NOW AN APP COMPLETELY FREE TO WATCH LIVE FOOTBALL WHAT ARE YOU WAITING FOR? DOWNLOAD APP!!!👇*', wm, [['DOWNLOAD', `#futgol`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, './media/DarkSide.m4a', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: estiloaudio })}
return !0
}
export default handler
