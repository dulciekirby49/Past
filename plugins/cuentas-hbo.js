let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 HBO 」─*\n*“${pickRandom(global.hbo)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['hbo']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^hbo/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.hbo = [
  "Mail: khaleelcooper@gmail.com Password: Kcooper13",
  "Mail: lmccorkle9@gmail.com Password: Leyshon1",
  "Mail: suzhaufler@gmail.com Password: Dashlily1!",
  "Mail: wordofbin+3@gmail.com Password: a1652100",
  "Mail: wordofbin+4@gmail.com Password: a1632086",
  "Mail: wordofbin+5@gmail.com Password: a1920203",
  "Mail: wordofbin+9@gmail.com Password: a1692101",
  "Mail: wordofbin+10@gmail.com Password: a4621057",

] 
