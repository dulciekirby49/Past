let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 CANVA PRO 」─*\n*“${pickRandom(global.canva)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['canva']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^canva/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.canva = [
  "Mail: haxiw46560@apparls.com Password: @Shizu.hub",
  "Mail: nileh70762@admarz.com Password: @Shizu.hub",
  "Mail: wbbhgym364@ondania.com Password: @Shizu.hub",
  "Mail: hyalhuf331@profunivers.com Password: @Shizu.hub",
  "Mail: hcbrrdy343@otelekom.com Password: @Shizu.hub",
  "Mail: fptdujg530@ondania.com Password: @Shizu.hub",
  "Mail: xepoli3895@apparls.com Password: NeKosmic#123",

] 
