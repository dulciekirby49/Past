/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 DONAR 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ HELOO ${name} 💙*
*┃*
*┃ 👉🏻 HERE SOME DATA*
*┃ IN CASE YOU LIKE TO SUPPORT :𝟹*
*┃*
*┃ ➤ KEY:* 
*┃ 646180192175788481*
*┃ ➤ BANK: STP* 
*┃ ➤ I will benefit:* 
*┃ BRUNO SOBRINO* 
*┃ ➤ CONCEPT: APOYO*  
*┃ ➤ PAYPAL: https://www.paypal.me/houssamatfi*
*┃*
*┃ 👉🏻 CONTACT ME ON* 
*┃ DATA AND FOR* 
*┃ wa.me/212672215449*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/houssamatfi', 'PAYPAL', null, null, [['MENU PRINCIPAL', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
