let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 DISNEY+ 」─*\n*“${pickRandom(global.disney)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['disney']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^disney/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.disney = [
  "Mail: jetrueba2004@yahoo.com Password: Amber305@",
  "Mail: jrod9613@yahoo.com Password: Baseball87*",
  "Mail: dalofs2001@yahoo.com Password: Chloecalla2",
  "Mail: shakirabartley@gmail.com Password: P@pedog1",
  "Mail: eggencole@gmail.com Password: Hunting97",
  "Mail: julien.bestron@gmail.com Password: Sucesmoi54",
  "Mail: natalie@nativeno.com Password: 4Me2know",

] 
