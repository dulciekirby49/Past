let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
✪GROUPE OFFCIAL OF BOT✪
▒▒▒▒▒▒▐███████▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐░▀░▀░▀░▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄▒
▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐▒
*1° https://chat.whatsapp.com/Fqks2gcOIOcBagV6mKgpZp*

*2° https://chat.whatsapp.com/Fqks2gcOIOcBagV6mKgpZp*
███▀▀▀▀███████████████
██░░░░░▄██████████████
█▌░░░░████░░██░░██░░██
██░░░░░▀██████████████
███▄▄▄▄███████████████
`.trim(), wm, media, [['💟 MENU PRINCIPAL 💟', '#allmenu']], m)
handler.command = /^linkgc|gruposofc$/i
export default handler
