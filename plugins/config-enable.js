
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `OPTIONS LIST`,
rows: [
{title: "✨ | WELCOME", description: "ENABLE OR DEACTIVATE THE WELCOME IN THE GROUP", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | PUBLIC MODE", description: "THE BOT BECOMES PUBLIC AND/OR PRIVATE USE", rowId: `${usedPrefix + command} public`},
{title: "🥵 | MODO HORNY", description: "ENABLE OR DISABLE THE COMMANDS +𝟷𝟾", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | ANTILINK", description: "ACTIVATE OR DEACTIVATE THE ANTI LINKS OF THE WHATSAPP GROUP", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | ANTILINK 𝟸", description: "ENABLE OR DISABLE THE ANTI LINKS THAT BEGIN IN HTTPS", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | DETECT", description: "ACTIVATE OR DISABLE NOTIFICATIONS OF NEW MODIFICATION IN A GROUP", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | RESTRICT", description: "ACTIVATE OR DEACTIVATE THE RESTRICTIONS TO REMOVE PEOPLE FROM THE GROUP", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | AUTOREAD", description: "AUTOMATICALLY MARK CONVERSATIONS AS READ", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | AUDIOS", description: "ENABLE OR DISABLE AUDIO COMMANDS WITHOUT PREFIX", rowId: `${usedPrefix + command} audios`},
{title: "👾 | AUTOSTICKER", description: "TODAS ELS IMAGES VIDEOS OR LINKS SENT FROM CONVERTEN EN STICKER", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | PCONLY", description: "THE BOT WILL ONLY RESPOND TO COMMANDS IF IT IS A PRIVATE CHAT", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | GCONLY", description: "THE BOT WILL ONLY RESPOND TO COMMANDS IF IT IS A GROUP", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | ANTIVIEWONCE", description: "ACTIVATE OR DISABLE THE ANTI SEE ONLY ONCE", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | ANTILLAMADA", description: "ACTIVATE OR DISABLE THE ANTILLAMADA", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | ANTIPRIVADO", description: "THE BOT WILL BLOCK USERS WHO TALK TO THE PRIVATE", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | ANTTITOXIC", description: "ACTIVATE OR DISABLE THE ANTITOXIC", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | ANTITRABAS", description: "ACTIVATE OR DISABLE THE ANTITRABAS", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | ANTIARABES", description: "WHEN SENDING A MESSAGE AN ARABIC NUMBER THE BOT TAKES IT OUT", rowId: `${usedPrefix + command} antiarabes`},  
{title: "🤖 | MODEJADIBOT", description: "ACTIVATE OR DISABLE COMMANDES SUBEBOT (#𝚂𝙴𝚁𝙱𝙾𝚃 / #𝙹𝙰𝙳𝙸𝙱𝙾𝚃)", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "👑 | MODOADMIN", description: "THE BOT WILL ONLY RESPOND TO THE ADMINS OF THE GROUP", rowId: `${usedPrefix + command} modoadmin`},  
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "SELECT HERE",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break 
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ OPTION: ${type} 
🎚️ STATE: ${isEnable ? 'ACTIVATE' : 'DISABLE'}
📣 FOR: ${isAll ? 'IT'S STUPID' : User ? '' : 'IT'S CHAT'}`, author, null, [[`${isEnable ? '✖️ DISABLE ✖️' : '✔️ ACTIVATE ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`], ['👾 MENU PRICIPALE 👾', '#menu']], m)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
