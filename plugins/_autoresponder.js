
import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { contextInfo: { externalAdReply: { title: 'Houssam-Bot', body: '©Houssam-Atfi', sourceUrl: `https://github.com/houssamatfi/`, thumbnail: imagen2}}})}
    
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
let join = `*< A BOT A TU GRUPO />*\n\n*Hello USERS/𝙰*\n*TO REQUEST A BOT TO YOUR GROUP USE THE COMMAND #join MAS EL ENLAGE DE TU GRUPO *\n\n*—◉ EXEMPLE:*\n*◉ #join* https://chat.whatsapp.com/Fqks2gcOIOcBagV6mKgpZp`.trim() 
this.sendHydrated(m.chat, join, wm, imagen4, 'https://www.paypal.me/houssamatfi', 'PAYPAL', null, null, [[null, null]], m)}
    
    
return !0 }
export default handler
