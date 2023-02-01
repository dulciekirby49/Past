let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*HEY!! THE ANTILINK IS ACTIVE, BUT YOU ARE ADMIN 😎, SAVED/A!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 ANTI LINKS 」*\n*see you baby 👋, ${await this.getName(m.sender)} YOU BROKE THE RULES OF THE GROUP, YOU WILL BE EXTERMNATED...!!*${isBotAdmin ? '' : '\n\n*[❗INFO❗] THE BOT IS NOT ADMIN CANNOT EXTERMINATE PEOPLE*'}`, author, ['Disable Anti Links', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗INFO❗] THE BOT IS NOT ADMIN IT CANNOT EXTERMINATE PEOPLE, GIVE THE BOT ADMINSHIP TO EXTERMINATE PEOPLE*')
}
return !0
}
