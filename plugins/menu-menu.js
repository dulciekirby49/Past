import fetch from 'node-fetch'
import fs, { promises } from 'fs'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = image4
let img = await(await fetch('https://i.ibb.co/cc8jfkX/01.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║    ◉— *HOUSSAM-BOT* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *HI, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Owner:* Houssam ATFI
║➤ *NUMBER:* wa.me/21272215449
║➤ *Bot ofc:* wa.me/212688435900
║➤ *UPTIME:* ${uptime}
╰══╡✯✯✯✯✯✯✯✯╞══╯
..................
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< INFO BOT />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 💟 _${usedPrefix}grupos_
┣🇵🇰 💟 _${usedPrefix}estado_
┣🇵🇰 💟 _${usedPrefix}infobot_
┣🇵🇰 💟 _${usedPrefix}speedtest_
┣🇵🇰 💟 _${usedPrefix}donar_
┣🇵🇰 💟 _${usedPrefix}grouplist_
┣🇵🇰 💟 _${usedPrefix}owner_
┣🇵🇰 💟 _${usedPrefix}script_
┣🇵🇰 💟 _Bot_ (use without prefix)
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< Add Bot To Your Group />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 👽 _${usedPrefix}join *<URL>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< SERBOT - JADIBOT />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🤖 _${usedPrefix}serbot_
┣🇵🇰 🤖 _${usedPrefix}stop_
┣🇵🇰 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛  
┏━━━━━━━━━━━━━┓
┃ *< GAMES />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣🇵🇰 🎖️ _${usedPrefix}ppt *<paper / scissors / stone>*_
┣🇵🇰 🎖️ _${usedPrefix}prostituto *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}prostituta *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}gay2 *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}lesbiana *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}pajero *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}pajera *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}puto *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}puta *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}manco *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}manca *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}rata *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}love *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}doxear *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}pregunta *<TEXT>*_
┣🇵🇰 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣🇵🇰 🎖️ _${usedPrefix}slot *<bet>*_
┣🇵🇰 🎖️ _${usedPrefix}ttt *<name>*_
┣🇵🇰 🎖️ _${usedPrefix}delttt_
┣🇵🇰 🎖️ _${usedPrefix}simi *<TEXT>*_
┣🇵🇰 🎖️ _${usedPrefix}top *<TEXT>*_
┣🇵🇰 🎖️ _${usedPrefix}topgays_
┣🇵🇰 🎖️ _${usedPrefix}topotakus_
┣🇵🇰 🎖️ _${usedPrefix}formarpareja_
┣🇵🇰 🎖️ _${usedPrefix}verdad_
┣🇵🇰 🎖️ _${usedPrefix}reto_
┣🇵🇰 🎖️ _${usedPrefix}cancion_
┣🇵🇰 🎖️ _${usedPrefix}pista_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< Enable OR Disable />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *welcome*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *modohorny*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *antilink*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *detect*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *audios*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *autosticker*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *antiviewonce*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *antitoxic*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *antitraba*_
┣🇵🇰 ☑️ _${usedPrefix}enable/disable *antiarabes*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┣ *< Report error />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🔰 _${usedPrefix}reporte *<TEXT>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< DOWNLOADS />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 📥 _${usedPrefix}instagram *<URL>*_
┣🇵🇰 📥 _${usedPrefix}mediafire *<URL>*_
┣🇵🇰 📥 _${usedPrefix}gitclone *<URL>*_
┣🇵🇰 📥 _${usedPrefix}gdrive *<URL>*_
┣🇵🇰 📥 _${usedPrefix}tiktok *<URL>*_
┣🇵🇰 📥 _${usedPrefix}xnxxdl *<URL>*_
┣🇵🇰 📥 _${usedPrefix}xvideosdl *<URL>*_
┣🇵🇰 📥 _${usedPrefix}twitter *<URL>*_
┣🇵🇰 📥 _${usedPrefix}fb *<URL>*_
┣🇵🇰 📥 _${usedPrefix}fb2 *<URL>*_
┣🇵🇰 📥 _${usedPrefix}fb3 *<URL>*_
┣🇵🇰 📥 _${usedPrefix}fb4 *<URL>*_
┣🇵🇰 📥 _${usedPrefix}fb5 *<URL>*_
┣🇵🇰 📥 _${usedPrefix}ytmp3 *<URL>*_
┣🇵🇰 📥 _${usedPrefix}ytmp4 *<URL>*_
┣🇵🇰 📥 _${usedPrefix}ytmp3doc *<URL>*_
┣🇵🇰 📥 _${usedPrefix}ytmp4doc *<URL>*_
┣🇵🇰 📥 _${usedPrefix}stickerpack *<URL>*_
┣🇵🇰 📥 _${usedPrefix}play *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}play.1 *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}play.2 *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}playdoc *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}playlist *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}playlist2 *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}spotify *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}stickerly *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}ringtone *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}soundcloud *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}image *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}pinteret *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}wallpaper *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}wallpaper2 *<TEXT>*_
┣🇵🇰 📥 _${usedPrefix}pptiktok *<Username>*_
┣🇵🇰 📥 _${usedPrefix}igstalk *<Username>*_
┣🇵🇰 📥 _${usedPrefix}igstory *<Username>*_
┣🇵🇰 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< GROUPE />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 💎 _${usedPrefix}add *<number>*_
┣🇵🇰 💎 _${usedPrefix}kick *<@tag>*_
┣🇵🇰 💎 _${usedPrefix}grupo *<open/close>*_
┣🇵🇰 💎 _${usedPrefix}grouptime *<option> <time>*_
┣🇵🇰 💎 _${usedPrefix}promote *<@tag>*_
┣🇵🇰 💎 _${usedPrefix}demote *<@tag>*_
┣🇵🇰 💎 _admins *<TEXT>*_ (use without prefix)
┣🇵🇰 💎 _${usedPrefix}demote *<@tag>*_
┣🇵🇰 💎 _${usedPrefix}infogroup_
┣🇵🇰 💎 _${usedPrefix}resetlink_
┣🇵🇰 💎 _${usedPrefix}link_
┣🇵🇰 💎 _${usedPrefix}setname *<TEXT>*_
┣🇵🇰 💎 _${usedPrefix}setdesc *<TEXT>*_
┣🇵🇰 💎 _${usedPrefix}invoke/invocar *<TEXT>*_
┣🇵🇰 💎 _${usedPrefix}setwelcome *<TEXT>*_
┣🇵🇰 💎 _${usedPrefix}setbye *<TEXT>*_
┣🇵🇰 💎 _${usedPrefix}hidetag *<TEXT>*_
┣🇵🇰 💎 _${usedPrefix}warn *<@tag>*_
┣🇵🇰 💎 _${usedPrefix}unwarn *<@tag>*_
┣🇵🇰 💎 _${usedPrefix}listwarn_
┣🇵🇰 💎 _${usedPrefix}ghosts_
┣🇵🇰 💎 _${usedPrefix}destraba_
┣🇵🇰 💎 _${usedPrefix}setpp *<image>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< Converters />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🧧 _${usedPrefix}togifaud *<video>*_
┣🇵🇰 🧧 _${usedPrefix}toimg *<sticker>*_
┣🇵🇰 🧧 _${usedPrefix}tomp3 *<video>*_
┣🇵🇰 🧧 _${usedPrefix}tomp3 *<voice note>*_
┣🇵🇰 🧧 _${usedPrefix}toptt *<video / audio>*_
┣🇵🇰 🧧 _${usedPrefix}tovideo *<sticker>*_
┣🇵🇰 🧧 _${usedPrefix}tourl *<video / image / audio>*_
┣🇵🇰 🧧 _${usedPrefix}tts en *<TEXT>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< Effects and Logos />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🖍️ _${usedPrefix}mensajefalso *<Name | Message>*_
┣🇵🇰 🖍️ _${usedPrefix}phmaker *<option> <image>*_
┣🇵🇰 🖍️ _${usedPrefix}logos *<effect> <TEXT>*_
┣🇵🇰 🖍️ _${usedPrefix}logochristmas *<TEXT>*_
┣🇵🇰 🖍️ _${usedPrefix}logocorazon *<TEXT>*_
┣🇵🇰 🖍️ _${usedPrefix}ytcomment *<TEXT>*_
┣🇵🇰 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣🇵🇰 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣🇵🇰 🖍️ _${usedPrefix}lolice *<@tag>*_
┣🇵🇰 🖍️ _${usedPrefix}itssostupid_
┣🇵🇰 🖍️ _${usedPrefix}pixelar_
┣🇵🇰 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< phrases and texts />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🥀 _${usedPrefix}piropo_
┣🇵🇰 🥀 _${usedPrefix}consejo_
┣🇵🇰 🥀 _${usedPrefix}fraseromantica_
┣🇵🇰 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< RANDOM />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣🇵🇰 👾 _${usedPrefix}cristianoronaldo_
┣🇵🇰 👾 _${usedPrefix}messi_
┣🇵🇰 👾 _${usedPrefix}meme_
┣🇵🇰 👾 _${usedPrefix}itzy_
┣🇵🇰 👾 _${usedPrefix}blackpink_
┣🇵🇰 👾 _${usedPrefix}lolivid_
┣🇵🇰 👾 _${usedPrefix}loli_
┣🇵🇰 👾 _${usedPrefix}navidad_
┣🇵🇰 👾 _${usedPrefix}ppcouple_
┣🇵🇰 👾 _${usedPrefix}wpmontaña_
┣🇵🇰 👾 _${usedPrefix}pubg_
┣🇵🇰 👾 _${usedPrefix}wpgaming_
┣🇵🇰 👾 _${usedPrefix}wpaesthetic_
┣🇵🇰 👾 _${usedPrefix}wpaesthetic2_
┣🇵🇰 👾 _${usedPrefix}wprandom_
┣🇵🇰 👾 _${usedPrefix}wallhp_
┣🇵🇰 👾 _${usedPrefix}wpvehiculo_
┣🇵🇰 👾 _${usedPrefix}wpmoto_
┣🇵🇰 👾 _${usedPrefix}coffee_
┣🇵🇰 👾 _${usedPrefix}pentol_
┣🇵🇰 👾 _${usedPrefix}caricatura_
┣🇵🇰 👾 _${usedPrefix}ciberespacio_
┣🇵🇰 👾 _${usedPrefix}technology_
┣🇵🇰 👾 _${usedPrefix}doraemon_
┣🇵🇰 👾 _${usedPrefix}hacker_
┣🇵🇰 👾 _${usedPrefix}planeta_
┣🇵🇰 👾 _${usedPrefix}randomprofile_
┣🇵🇰 👾 _${usedPrefix}neko_
┣🇵🇰 👾 _${usedPrefix}waifu_
┣🇵🇰 👾 _${usedPrefix}akira_
┣🇵🇰 👾 _${usedPrefix}akiyama_
┣🇵🇰 👾 _${usedPrefix}anna_
┣🇵🇰 👾 _${usedPrefix}asuna_
┣🇵🇰 👾 _${usedPrefix}ayuzawa_
┣🇵🇰 👾 _${usedPrefix}boruto_
┣🇵🇰 👾 _${usedPrefix}chiho_
┣🇵🇰 👾 _${usedPrefix}chitoge_
┣🇵🇰 👾 _${usedPrefix}deidara_
┣🇵🇰 👾 _${usedPrefix}erza_
┣🇵🇰 👾 _${usedPrefix}elaina_
┣🇵🇰 👾 _${usedPrefix}eba_
┣🇵🇰 👾 _${usedPrefix}emilia_
┣🇵🇰 👾 _${usedPrefix}hestia_
┣🇵🇰 👾 _${usedPrefix}hinata_
┣🇵🇰 👾 _${usedPrefix}inori_
┣🇵🇰 👾 _${usedPrefix}isuzu_
┣🇵🇰 👾 _${usedPrefix}itachi_
┣🇵🇰 👾 _${usedPrefix}itori_
┣🇵🇰 👾 _${usedPrefix}kaga_
┣🇵🇰 👾 _${usedPrefix}kagura_
┣🇵🇰 👾 _${usedPrefix}kaori_
┣🇵🇰 👾 _${usedPrefix}keneki_
┣🇵🇰 👾 _${usedPrefix}kotori_
┣🇵🇰 👾 _${usedPrefix}kurumi_
┣🇵🇰 👾 _${usedPrefix}madara_
┣🇵🇰 👾 _${usedPrefix}mikasa_
┣🇵🇰 👾 _${usedPrefix}miku_
┣🇵🇰 👾 _${usedPrefix}minato_
┣🇵🇰 👾 _${usedPrefix}naruto_
┣🇵🇰 👾 _${usedPrefix}nezuko_
┣🇵🇰 👾 _${usedPrefix}sagiri_
┣🇵🇰 👾 _${usedPrefix}sasuke_
┣🇵🇰 👾 _${usedPrefix}sakura_
┣🇵🇰 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━┓
┃ *< EFFECTS AUDIO />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃*- RESPOND A AUDIO OR A VOICE NOTE*
┣🇵🇰 🎤 _${usedPrefix}bass_
┣🇵🇰 🎤 _${usedPrefix}blown_
┣🇵🇰 🎤 _${usedPrefix}deep_
┣🇵🇰 🎤 _${usedPrefix}earrape_
┣🇵🇰 🎤 _${usedPrefix}fast_
┣🇵🇰 🎤 _${usedPrefix}fat_
┣🇵🇰 🎤 _${usedPrefix}nightcore_
┣🇵🇰 🎤 _${usedPrefix}reverse_
┣🇵🇰 🎤 _${usedPrefix}robot_
┣🇵🇰 🎤 _${usedPrefix}slow_
┣🇵🇰 🎤 _${usedPrefix}smooth_
┣🇵🇰 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< CHAT ANONYMOUS />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 📳 _${usedPrefix}start_
┣🇵🇰 📳 _${usedPrefix}next_
┣🇵🇰 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< SEARCH />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🔍 _${usedPrefix}stickersearch *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}stickersearch2 *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}xnxxsearch *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}animeinfo *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}google *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}letra *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}wikipedia *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}ytsearch *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}apkdone *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}apkgoogle *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}apkmody *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}apkshub *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}happymod *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}hostapk *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}revdl *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}toraccino *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}uapkpro *<TEXT>*_
┣🇵🇰 🔍 _${usedPrefix}playstore *<TEXT>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< AUDIO />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *- Write the following words or phrases without any prefix (#, /, *, .)* 
┃ _- (USE WITHOUT PREFIX)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🔊 _Gali_
┣🇵🇰 🔊 _Gucci_
┣🇵🇰 🔊 _Fiesta del admin_
┣🇵🇰 🔊 _Fiesta del administrador_ 
┣🇵🇰 🔊 _Vivan los novios_
┣🇵🇰 🔊 _Feliz cumpleaños_
┣🇵🇰 🔊 _Noche de paz_
┣🇵🇰 🔊 _Buenos dias_
┣🇵🇰 🔊 _Buenos tardes_
┣🇵🇰 🔊 _Buenos noches_
┣🇵🇰 🔊 _Audio hentai_
┣🇵🇰 🔊 _Chica lgante_
┣🇵🇰 🔊 _Feliz navidad_
┣🇵🇰 🔊 _Vete a la vrg_
┣🇵🇰 🔊 _Pasa pack Bot_
┣🇵🇰 🔊 _Atencion grupo_
┣🇵🇰 🔊 _Marica quien_
┣🇵🇰 🔊 _Murio el grupo_
┣🇵🇰 🔊 _Oh me vengo_
┣🇵🇰 🔊 _tio que rico_
┣🇵🇰 🔊 _Viernes_
┣🇵🇰 🔊 _Baneado_
┣🇵🇰 🔊 _Sexo_
┣🇵🇰 🔊 _Hola_
┣🇵🇰 🔊 _Un pato_
┣🇵🇰 🔊 _Nyanpasu_
┣🇵🇰 🔊 _Te amo_
┣🇵🇰 🔊 _Yamete_
┣🇵🇰 🔊 _Bañate_
┣🇵🇰 🔊 _Es puto_
┣🇵🇰 🔊 _La biblia_
┣🇵🇰 🔊 _Onichan_
┣🇵🇰 🔊 _Mierda de Bot_
┣🇵🇰 🔊 _Siuuu_
┣🇵🇰 🔊 _Epico_
┣🇵🇰 🔊 _Shitpost_
┣🇵🇰 🔊 _Rawr_
┣🇵🇰 🔊 _UwU_
┣🇵🇰 🔊 _:c_
┣🇵🇰 🔊 _a_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< TOOLS />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 🛠️ _${usedPrefix}spamwa *<number|TEXT|amount>*_
┣🇵🇰 🛠️ _${usedPrefix}tamaño *<amount> <image / video>*_
┣🇵🇰 🛠️ _${usedPrefix}clima *<country> <amount>*_
┣🇵🇰 🛠️ _${usedPrefix}encuesta *<TEXT1|TEXT2...>*_
┣🇵🇰 🛠️ _${usedPrefix}afk *<reason>*_
┣🇵🇰 🛠️ _${usedPrefix}ocr *<responde a image>*_
┣🇵🇰 🛠️ _${usedPrefix}acortar *<URL>*_
┣🇵🇰 🛠️ _${usedPrefix}calc *<operation math>*_
┣🇵🇰 🛠️ _${usedPrefix}del *<message>*_
┣🇵🇰 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣🇵🇰 🛠️ _${usedPrefix}readqr *<image (QR)>*_
┣🇵🇰 🛠️ _${usedPrefix}qrcode *<TEXT>*_
┣🇵🇰 🛠️ _${usedPrefix}readmore *<TEXT1| TEXT2>*_
┣🇵🇰 🛠️ _${usedPrefix}styletext *<TEXT>*_
┣🇵🇰 🛠️ _${usedPrefix}traducir *<TEXT>*_
┣🇵🇰 🛠️ _${usedPrefix}zoom *<TEXT>*_
┣🇵🇰 🛠️ _${usedPrefix}nowa *<number>*_
┣🇵🇰 🛠️ _${usedPrefix}covid *<country>*_
┣🇵🇰 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< RPG - LIMITES - ECONOMY />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 💵 _${usedPrefix}transfer *<type> <amount> <@tag>*_
┣🇵🇰 💵 _${usedPrefix}balance_
┣🇵🇰 💵 _${usedPrefix}claim_
┣🇵🇰 💵 _${usedPrefix}lb_
┣🇵🇰 💵 _${usedPrefix}levelup_
┣🇵🇰 💵 _${usedPrefix}myns_
┣🇵🇰 💵 _${usedPrefix}perfil_
┣🇵🇰 💵 _${usedPrefix}work_
┣🇵🇰 💵 _${usedPrefix}minar_
┣🇵🇰 💵 _${usedPrefix}buy_
┣🇵🇰 💵 _${usedPrefix}buyall_
┣🇵🇰 💵 _${usedPrefix}verificar_
┣🇵🇰 💵 _${usedPrefix}unreg *<number de serie>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< STICKERS />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 👽 _${usedPrefix}sticker *<responder a image o video>*_
┣🇵🇰 👽 _${usedPrefix}sticker *<URL>*_
┣🇵🇰 👽 _${usedPrefix}s *<responder a image o video>*_
┣🇵🇰 👽 _${usedPrefix}s *<URL>*_
┣🇵🇰 👽 _${usedPrefix}sfull *<image o video>*_
┣🇵🇰 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣🇵🇰 👽 _${usedPrefix}scircle *<image>*_
┣🇵🇰 👽 _${usedPrefix}sremovebg *<image>*_
┣🇵🇰 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣🇵🇰 👽 _${usedPrefix}attp *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}attp2 *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}attp3 *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}ttp *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}ttp2 *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}ttp3 *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}ttp4 *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}ttp5 *<TEXT>*_
┣🇵🇰 👽 _${usedPrefix}pat *<@tag>*_
┣🇵🇰 👽 _${usedPrefix}slap *<@tag>*_
┣🇵🇰 👽 _${usedPrefix}kiss *<@tag>*_
┣🇵🇰 👽 _${usedPrefix}dado_
┣🇵🇰 👽 _${usedPrefix}wm *<packname> <author>*_
┣🇵🇰 👽 _${usedPrefix}stickermarker *<efect> <image>*_
┣🇵🇰 👽 _${usedPrefix}stickerfilter *<efect> <image>*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *< OWNER MODERATOR />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣🇵🇰 👑 > *<funcion>*
┣🇵🇰 👑 => *<funcion>*
┣🇵🇰 👑 $ *<funcion>*
┣🇵🇰 👑 _${usedPrefix}setprefix *<prefix>*_
┣🇵🇰 👑 _${usedPrefix}resetprefix_
┣🇵🇰 👑 _${usedPrefix}autoadmin_
┣🇵🇰 👑 _${usedPrefix}leavegc_
┣🇵🇰 👑 _${usedPrefix}cajafuerte_
┣🇵🇰 👑 _${usedPrefix}blocklist_
┣🇵🇰 👑 _${usedPrefix}block *<@tag / number>*_
┣🇵🇰 👑 _${usedPrefix}unblock *<@tag / number>*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *restrict*_
┣🇵🇰 👑 _${usedPrefix}disable *restrict*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *autoread*_
┣🇵🇰 👑 _${usedPrefix}disable *autoread*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *public*_
┣🇵🇰 👑 _${usedPrefix}disable *public*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *pconly*_
┣🇵🇰 👑 _${usedPrefix}disable *pconly*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *gconly*_
┣🇵🇰 👑 _${usedPrefix}disable *gconly*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *anticall*_
┣🇵🇰 👑 _${usedPrefix}disable *anticall*_
┣🇵🇰 👑 _${usedPrefix}enable/disable *antiprivado*_
┣🇵🇰 👑 _${usedPrefix}disable *antiprivado*_
┣🇵🇰 👑 _${usedPrefix}msg *<TEXT>*_
┣🇵🇰 👑 _${usedPrefix}banchat_
┣🇵🇰 👑 _${usedPrefix}unbanchat_
┣🇵🇰 👑 _${usedPrefix}banuser *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}unbanuser *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}añadirxp *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}banuser *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}bc *<TEXT>*_
┣🇵🇰 👑 _${usedPrefix}bcchats *<TEXT>*_
┣🇵🇰 👑 _${usedPrefix}bcgc *<TEXT>*_
┣🇵🇰 👑 _${usedPrefix}bcbot *<TEXT>*_
┣🇵🇰 👑 _${usedPrefix}cleartpm_
┣🇵🇰 👑 _${usedPrefix}restart_
┣🇵🇰 👑 _${usedPrefix}update_
┣🇵🇰 👑 _${usedPrefix}banlist_
┣🇵🇰 👑 _${usedPrefix}addprem *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}delprem *<@tag>*_
┣🇵🇰 👑 _${usedPrefix}listprem_
┣🇵🇰 👑 _${usedPrefix}listcmd_
┣🇵🇰 👑 _${usedPrefix}setppbot *<responder a image>*_
┣🇵🇰 👑 _${usedPrefix}addcmd *<TEXT> <responder a sticker/image>*_
┣🇵🇰 👑 _${usedPrefix}delcmd *<responder a sticker/image with command or TEXT assigned>*_
┗━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#redes', buttonText: { displayText: '⍟REDES⍟' }, type: 1 },
{ buttonId: '#gruposofc', buttonText: { displayText: '⍟GROUPE⍟' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: image1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${cotext}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 HOUSSAM » BOT 👑',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/Fqks2gcOIOcBagV6mKgpZp`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗INFO❗] THE MENU HAS AN ERROR AND IT WAS NOT POSSIBLE TO SEND IT REPORT IT TO THE OWNER OF THE BOT*', m)
}}
handler.command = /^(allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
