let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://www.instagram.com/houssam_iii/*`
let buttonMessage= {
'document': { url: `https://www.instagram.com/houssam_iii/` },
'mimetype': `application/${document}`,
'fileName': `「  Hello World 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://www.instagram.com/houssam_iii/',
'mediaType': 2,
'previewType': 'pdf',
'title': 'EL MAJOR BO WHATSSAP⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.instagram.com/houssam_iii/' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'DONAR'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','script']
export default handler
