let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 PRIME VIDEO 」─*\n*“${pickRandom(global.primevideo)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['primevideo']
handler.tags = ['fun']
handler.limit = 2
handler.command = /^prime/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.primevideo = [
  "Register on this website https://dash.boxmineworld.com/register?ref=xGjnynVf and claim your account en wa.me/34623442554 offer valid until 22/10/22",

] 
