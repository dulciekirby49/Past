
let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 INFORMATON OF GROUPE 」*\n
*IDENTIFICATION OF GROUPE:* 
${groupMetadata.id}
*NOMBRE:* 
${groupMetadata.subject}
*DESCRIPTION:* 
${groupMetadata.desc?.toString() || 'SIN DESCRIPTION'}
*TOTAL PARTICIPING:*
${participants.length} Participantes
*CREATOR OF GROUPE:* 
@${owner.split('@')[0]}
*ADMINS OF GROUPE:*
${listAdmin}
*OPTION AUTOMATIC:*
—◉ WELCOME: ${welcome ? '✅' : '❌'}
—◉ DETECT: ${detect ? '✅' : '❌'} 
—◉ ANTILINK: ${antiLink ? '✅' : '❌'} 
—◉ ANTILINK 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ MODO HORNY: ${modohorny ? '✅' : '❌'} 
—◉ AUTOSTICKER: ${autosticker ? '✅' : '❌'} 
—◉ AUDIO: ${audios ? '✅' : '❌'} 
—◉ ANTIVIEWONCE: ${antiviewonce ? '✅' : '❌'} 
—◉ ANTITOXIC: ${antiToxic ? '✅' : '❌'} 
—◉ ANTITRABA: ${antiTraba ? '✅' : '❌'} 
—◉ MODO ADMIN: ${modoadmin ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
