import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://violetics.pw/api/media/removebg?apikey=beta&img=${url}`) 
let stickerr = await sticker(false, sremovebg, global.packname, global.author)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*[❗INFO❗] I'M SORRY AN ERROR OCCURRED, TRY AGAIN DON'T FORGET TO RESPOND TO AN IMAGE WHICH WILL BECOME A STICKER WITHOUT BACKGROUND*')
}}
handler.command = /^sremovebg|removebg$/i
export default handler
