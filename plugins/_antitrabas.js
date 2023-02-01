//
//By @NeKosmic || https://github.com/NeKosmic/
//
import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let name = await conn.getName(m.sender)
    let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}}
    if (chat.antiTraba && m.text.length > 5000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    	if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} you just sent a text that contains many characters -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] A message containing many characters was detected [ ! ]*\n`, `${isBotAdmin ? '' : 'I'm not an administrator, I can't do anything :/'}`, author, ['[ DISABLE ANTI HAMPER ]', usedPrefix+'turn off anti-jamming'], fakemek )
        if (isBotAdmin && bot.restrict) {
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `Mark chat as read ✓\n${"\n".repeat(400)}\n=> El número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] You have just sent a text that contains many characters that can cause device failures`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] To perform delete actions my owner has to turn on restricted mode!')
    }
    return !0
}
