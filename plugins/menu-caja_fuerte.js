const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_ミ💖 HELOO ${name} 💖彡_*

ㅤㅤ *🗳️<SAFE/>🔐*

- HERE YOU CAN SAVE MESSAGES YOU WANT TO SEE LATER

*<ADD TO THE LIST/>*

° ඬ⃟🗳️ _${usedPrefix}agregarmsg *<text/commande/word key>* (respond to a text)_
° ඬ⃟🗳️ _${usedPrefix}agregarvn *<text/commande/word key>* (respond to a voice note)_
° ඬ⃟🗳️ _${usedPrefix}agregarvideo *<text/commande/word key>* (responde a un video)_
° ඬ⃟🗳️ _${usedPrefix}agregaraudio *<text/commande/word key>* (responds a un audio)_
° ඬ⃟🗳️ _${usedPrefix}agregarimg *<text/commande/word key>* (respond to a picture)_
° ඬ⃟🗳️ _${usedPrefix}agregarsticker *<text/commande/word key>* (responde a un sticker)_

*<LISTE DE COMMANDES>*

° ඬ⃟🗳️ _${usedPrefix}listamsg_
° ඬ⃟🗳️ _${usedPrefix}listavn_
° ඬ⃟🗳️ _${usedPrefix}listavideo_
° ඬ⃟🗳️ _${usedPrefix}listaaudio_
° ඬ⃟🗳️ _${usedPrefix}listaimg_
° ඬ⃟🗳️ _${usedPrefix}listasticker_

*<SEE TEXTS OR FILES/>*

° ඬ⃟🗳️ _${usedPrefix}vermsg *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}vervn *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}vervideo *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}veraudio *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}verimg *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}versticker *<text/commande/word key>*_

*<REMOVE/>*

° ඬ⃟🗳️ _${usedPrefix}eliminarmsg *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarvn *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarvideo *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}eliminaraudio *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarimg *<text/commande/word key>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarsticker *<text/commande/word key>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/houssamatfi', 'GITHUB', null, null, [
['MENU PRINCIPALE', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler