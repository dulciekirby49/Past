let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ LOVE METER ❤️❤️*
*The love of ${text} it's for you* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*You should ask her to be your girlfriend ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
