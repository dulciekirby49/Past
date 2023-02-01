/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[❗INFO❗] REPLY TO A VIDEO YOU WANT TO TURN INTO A GIF WITH AUDIO*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[❗] THE FILE TYPE ${mime} IT IS NOT CORRECT ANSWER TO A VIDEO YOU WANT TO CONVERT INTO GIF WITH AUDIO*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*HERE IS YOUR GIF WITH AUDIO WHEN OPENING IT, IT PLAYS WITH AUDIO*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
