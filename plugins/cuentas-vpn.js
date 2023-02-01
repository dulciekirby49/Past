let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 KEEPSOLID 」─*\n*“${pickRandom(global.vpn)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['vpn']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^vpn/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.vpn = [
  "Mail: behen71900@admarz.com Password: @Shizu.hub",
  "Mail: nacar19667@apparls.com Password: @Shizu.hub",
  "Mail: nekaso4157@ecipk.com Password: @Shizu.hub",
  "Mail: xomel68728@admarz.com Password: @Shizu.hub",
  "Mail: vawobeb465@apparls.com Password: @Shizu.hub",
  "Mail: netad33153@ecipk.com Password: @Shizu.hub",
  "Mail: sobeje2583@ecipk.com Password: @Shizu.hub",
  "Mail: xepoli3895@apparls.com Password: NeKosmic#321",

] 
