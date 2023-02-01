let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗INFO❗] THE USER ${conn.getName(m.sender)} WILL BE INACTIVE (AFK), PLEASE DO NOT TAG IT*\n\n*—◉ REASON FOR INACTIVITY (AFK)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
