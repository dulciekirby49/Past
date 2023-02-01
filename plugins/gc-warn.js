let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[❗] TAG A PERSON OR REPLY TO A GROUP MESSAGE TO WARN THE USER*\n\n*—◉ EXAMPLE:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} I RECEIVED A WARNING IN THIS GROUP!`, `*WARNINGS ${user.warn}/3*\n\n${wm}`, pp, [['📋 LISTWARN 📋', '#listwarn']], m, { mentions: [who] })
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('*[❗INFO❗] THE OWNER OF THE BOT HAS NOT ENABLED THE RESTRICTIONS (#enable restrict) CONTACT HIM TO ENABLE IT*')        
user.warn = 0
await m.reply(`I WARNED YOU SEVERAL TIMES!!\n*@${who.split`@`[0]}* YOU OVERCOME THE *3* WARNINGS NOW YOU WILL BE ELIMINATED/𝙰 👽`, null, { mentions: [who]})
//user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
} 
return !1
}
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
