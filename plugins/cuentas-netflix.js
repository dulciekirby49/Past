let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 NETFLIX 」─*\n*“${pickRandom(global.netflix)}”*\n*└────「 ACCOUNT GENERATED 」─*`, m)
}
handler.help = ['netflix']
handler.tags = ['fun']
handler.command = /^netflix/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.netflix = [
  "Mail: ravindra1976@gmail.com Password: FedJok!2 ",
  "Mail: lee.trak97@gmail.com Password: Trac110797",
  "Mail: bonnabona@hotmail.com Password: 030411",
  "Mail: luismendes@codifinanca.pt Password: Lpsm1974149",
  "Mail: tonomtz@outlook.com Password: Tono251309@",
  "Mail: dsmmesquita@hotmail.com Password: scorpion1978",
  "Mail: jesusdecorme@gmail.com Password: jona2004",
  "Mail: belarmino20424-2@hotmail.com Password: 20242024 ",
  "Mail: pinardursen@gmail.com Password: 260905",
  "Mail: maceprg@gmail.com Password: hana3248",
  "Mail: neggan200@gmail.com Password: aecio#300386",
  "Mail: fjsmith4@gmail.com Password: Lpsm1974149",
  "Mail: tonomtz@outlook.com Password: Tono251309@",
  "Mail: dsmmesquita@hotmail.com Password: Workshop7269",

] 
