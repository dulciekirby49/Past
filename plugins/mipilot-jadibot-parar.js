let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Why don't you go directly with the Bot number?', m)
else {
await conn.reply(m.chat, 'bye bye bot :\')', m)
conn.ws.close()}}
handler.command = /^(berhenti|stop)$/i
handler.owner = true  
handler.fail = null
export default handler
