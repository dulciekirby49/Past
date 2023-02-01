export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[❗INFO❗] YOU STOPPED BEING INACTIVE (AFK)${user.afkReason ? ' DEBUGES BEING INACTIVE (AFK) FOR THE REASON: ' + user.afkReason : ''}*
  
  *—◉ DOWNTIME (AFK): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] DON'T LABEL IT [❗]*

*—◉ THE USER YOU TAGGED IS INACTIVE (AFK)*      
*—◉ ${reason ? 'REASON FOR INACTIVITY (AFK): ' + reason : 'REASON FOR INACTIVITY (AFK): _THE USER DID NOT SPECIFY A REASON_'}*
*—◉ ELAPSED TIME OF INACTIVITY (AFK): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
