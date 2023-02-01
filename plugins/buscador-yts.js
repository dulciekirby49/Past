import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[❗INFO❗] INSERT THE NAME OF ANY VIDEO OR YOUTUBE CHANNEL*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
📌 *${v.title}* (${v.url})
⌚ DURATION: ${v.durationH}
⏲️ PUBLISHED ${v.publishedTime}
👁️ ${v.view} VIEWS
`.trim()
case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} SUBSCRIBERS
🎥 ${v.videoCount} VIDEOS
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
