export async function all(m, conn) {
let texto
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.antispam)
return !0
if (+new Date() > user.antispam) {
let tiempo = 60000 * 1
setTimeout(() => {
user.banned = false
texto = `*[❗] @${m.sender.split("@")[0]} HE WAS UNBANNED AFTER BEING BANNED FOR ${tiempo / 1000 - 59} MINUTES, DON'T SPAM ANYMORE!!!*`
this.sendButton(m.chat, texto, wm, null, [['☘️ M E N U', '#menu']], m, { mentions: this.parseMention(texto) })}, tiempo)        
user.antispam = null
}}
