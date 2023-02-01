async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*[❗INFO❗] YOU ARE NOT IN AN ANONYMOUS CHAT?*\n_YOU WANT TO EXIT THE ANONYMOUS CHAT_', author, null, [['EXIT ANONYMOUS CHAT', `.start`]], m)
m.reply('*[ ✔ ] EXIT SUCCESSFULLY FROM ANONYMOUS CHAT*')
let other = room.other(m.sender) 
if (other) await this.sendButton(other, '*[❗INFO❗] THE OTHER USER HAS ABANDONED THE ANONYMOUS CHAT*\n\n*¿YOU WANT TO EXIT THE ANONYMOUS CHAT?*\n_CLICK ON THE FOLLOWING BUTTON_', author, null, [['EXIT ANONYMOUS CHAT', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[❗INFO❗] ARE YOU STILL IN AN ANONYMOUS CHAT OR WAITING FOR ANOTHER USER TO JOIN TO START*\n\n*¿YOU WANT TO EXIT THE ANONYMOUS CHAT?*\n_CLICK ON THE FOLLOWING BUTTON_', author, null, [['EXIT ANONYMOUS CHAT', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, '*[ ✔ ] A PERSON HAS JOINED THE ANONYMOUS CHAT CAN START CHATTING*', author, null, [['GO TO ANOTHER CHAT', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, '*[ ✔ ] A PERSON HAS JOINED THE ANONYMOUS CHAT CAN START CHATTING*', author, null, [['GO TO ANOTHER CHAT', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[❗INFO❗] WAITING FOR ANOTHER USER TO START THE ANONYMOUS CHAT*\n\n*¿YOU WANT TO EXIT THE ANONYMOUS CHAT?*\n_CLICK ON THE FOLLOWING BOTOM_', author, null, [['EXIT ANONYMOUS CHAT', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
