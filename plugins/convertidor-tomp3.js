import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `Responded to a video or nota de voz to convert an MP3 audio`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `I couldn't download the video I tried again`
if (!media && !/audio/.test(mime)) throw `I don't know, I can download the voice note, I tried again`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `I don't know I managed to convert your voice note to MP3 audio I tried again later.`
if (!audio.data && !/video/.test(mime)) throw `I don't know I managed to convert your voice note to MP3 audio I tried again later.`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
