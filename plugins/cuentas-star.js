let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 STAR+ 」─*\n*“${pickRandom(global.star)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['star']
handler.tags = ['fun']
handler.limit = 2
handler.command = /^star/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.star = [
  "Mail: gusmaojean3@gmail.com Password: rosa1997",
  "Mail: joaocamposjr@yahoo.com.br Password: Morf@2651",
  "Mail: romeroraposo@gmail.com Password: esqueci99",
  "Mail: dbrunatventasml@gmail.com Password: frusciante17",
  "Mail: fernando170894@gmail.com Password: Fernand2",
  "Mail: celina.pirondi@terra.com.br Password: 8uenaVista",

] 
