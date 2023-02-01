let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
        
if (/^Heloo bot|heloo/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`hola cómo estás`, m)
}    
if (/^How are you|How are you$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊 Super good and you?`, m)
}   
if (/^I'm fine tranks|good$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃 that's good. I'm glad to know that.`, m)
}  
if (/^and what do you do bot|What are you doing$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉for now I'm only responding to all the requests that I'm asked for since that's what I'm programmed for😗, and what are you doing?`, m)           
}
if (/^and what do you do bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉for now I'm only responding to all the requests that I'm asked for since that's what I'm programmed for😗, and what are you doing?`, m)           
}
if (/^I'm bored|I am boring$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`mm like so 🙃 I recommend you play for a while to distract yourself or watch television you can go for a walk🌹`, m)           
}
if (/^I'm doing my homework|I do homework$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌very good I'm glad you're studying 💖 keep studying and try hard 🙃`, m)          
}
if (/^I am resting|I'm just resting$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌That's good. I'm glad for you that you're resting. It will help you a lot to replenish you and recover your energy. 😉`, m)           
}
if (/^I'm watching TV|I only watch TV|I watch TV $/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌that's good enjoy the movie and have a good time you should make yourself some popcorn and if you can invite me 🤭`, m)           
}
if (/^nd|Nothing$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`but why`, m)           
}
if (/^how old are you|how old are you$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`3 Years 😊, there you?`, m)          
}
if (/^14|15|16|17$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤭 you are still a child@✨`, m)           
}
if (/^I am working|working$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃 I'm glad you're working, good luck in your work and that you're doing super well 🙌✨`, m)           
}
if (/^18|19|20|22|23|24|25|26|28|30$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`you are already an adult@✨`, m)           
}
if (/^Who is your creator|Bot who believe you|what is the name of your creator$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`❤️ my creator is Houssam, do you need it for something if you want I can communicate with my creator🙃?`, m)           
}
if (/^pass me your number|send me your number$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊✨ Well, it's fine, but I'll inform you, just talk to him for the topic of me. instalación\nWa.me/212688435900 `, m)           
}
if (/^quieres ser mi novia|quieres ser mi novio$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😥I do want to but I'm not real 😭`, m)           
}
if (/^dame un consejo bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊sure yes how what kind of advice?`, m)           
}
if (/mi novia no me habla crees que debería hablarle$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🌹Of course, if you try to talk to your girlfriend, if I don't talk to you, it's because of a lack of communication between you, you should talk more if you do. I'm sure the relationship will go well.😊`, m)           
}
if (/^pero no me contesta$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`:⁠,⁠-⁠) Well, then you should talk very seriously with her, maybe she has someone else or maybe she's busy or that's why she doesn't answer you but you have to talk to her 🙃`, m)           
}
if (/^Cómo hago para ganar dinero$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊Well, to earn easy money, you have to work and give your all and all your effort, nothing is easy in this life, but with your effort I know that you can have everything you want. I can't tell you that you will have it very quickly, but for Getting what you want is hard and when you have it, your effort will be worth a lot, so push yourself for what you want and for your goals.🌹`, m)           
}
if (/^xd$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤭it's funny right?`, m)           
}
if (/^mi novio no me habla$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`but because you already tried to talk to him Maybe he's busy but if you think it's something else you should talk very seriously with him 😊`, m)           
}
if (/^$me engaño mi novia|me engañó mi novio/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😥I'm so sorry, friend, I don't know what happened in your relationship, but feel free to remember that he no longer knew how to value you, so cheer up 😊`, m)           
}
if (/^si$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`hahaha`, m)           
}
if (/^Bot me quieres$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`of course you are my favorite person 💖`, m)           
}
if (/^me quiero morir$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`no digas eso me pondrá triste 😞`, m)           
}
if (/^nadie me quiere$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`estoy seguro que sí yo te quiero 🌹`, m)           
}
if (/^bot tú sientes sentimientos$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😞 quisiera sentir eso pero solo soy un Bot y no soy real así que no puedo sentir ningún sentimiento😭`, m)           
}
if (/^de dónde eres$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`De México y tu?`, m)           
}
if (/^Mexico|Argentina|Veracruz|Venezuela|Monterrey|Sinaloa|Estados Unidos|Paraguay|Acapulco|Cancún|Apizaco|Perú|Venezuela|Guadalajara|San Lorenzo|Chile|Francia|España$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`oh qué bien`, m)           
}
if (/^hades$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sí en qué te puedo ayudar?`, m)           
}
if (/^eres un Bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`claro que sí`, m)           
}
if (/^te puedes unir a mi grupo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🌱eso es depende dependiendo de cuántos participantes tienes en tu grupo si solamente tienes entre 40 no puedo entrar y aparte necesitas la autorización de mi creador `, m)           
}
if (/^Cómo puedo usar el Bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`✨pon palabra b /menu para que puedas ver todos mis comandos`, m)           
}
if (/^ya voy dormir$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`Bueno está bien que tengas dulces sueños 🌆`, m)           
}
if (/^bot A dónde están todos$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`no lo sé tal vez están ocupados 😞`, m)           
}
if (/^el grupo está muerto$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`siii F`, m)           
}
if (/^el grupo está activo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pues obvio somos activos 😎`, m)           
}
if (/^una pregunta$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉sí dime en qué te puedo ayudar?`, m)           
}
if (/^Cómo puedo tener un Bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`puedes solicitar El comando /instalarbot y te agarra toda la información sobre el tema también puedes visitar el canal de ☘️YouTube para que lo puedas hacer correctamente`, m)           
}
if (/^bot eres hombre o mujer$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pues no pertenezco a ningún sexo puedo ser hombre o mujer`, m)           
}
if (/^pasen porno$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤭eso no se pide cochino`, m)           
}
if (/^puedo hacer stickers$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`es fácil solo manda una imagen y después etiquetas la imagen y ponse /s y te mandara el sticker`, m)           
}
if (/^gracias bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌de nada Me alegro poderte ayudar ☘️`, m)           
}
if (/^bot te extraño$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`Yo también cariño 🥺`, m)           
}
if (/^bot estás ahí$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sí aquí sigo 🤭`, m)           
}
if (/^cállate bot|ya cállate bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`no quiero 😒`, m)           
}
if (/^ya duérmanse$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pero aún es muy temprano 😅`, m)           
}
if (/^estoy enfermo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`espero que te puedas mejorar pronto🙌`, m)  
}             
if (/^😞|😒|😐|🙄|🤔|🥺|🤨|😑|😣|😖|☹️|🙁|😟$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`¿que pasa?`, m)  
}             
if (/Estoy enojado|estoy enojada^$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`cuál fue el motivo?`, m)  
}     
if (/^estoy molesto|estoy molesta^$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`y eso por qué?`, m)  
}    
if (/^estoy triste$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`qué te hicieron`, m)  
} 
if (/^hoy es mi cumpleaños$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌🥳 Pues muchas felicidades la pases muy bien y que cumplas muchos años más 🎂`, m)  
}
if (/^puto bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤨eres un estúpido `, m)  
}
if (/^voy a comer$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`buen provecho 🙌`, m)  
}
if (/^me voy a bañar$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`ya llevas muchos días sin bañarte🤭`, m)  
}
if (/^bot mi amigo me engaña con mi novia$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`tal vez`, m)  
}
if (/^yo soy fiel verdad bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`eres un mentiroso 😐`, m)  
}
if (/^bot eres mi amigo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉Por supuesto que sí los mejores amigos 💖`, m)  
}
if (/^E$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`¿qué dijo este extraño?`, m)  
}
if (/^bot ya no te quiero$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🥺 Por qué qué hice 😐 o acaso tienes alguien más?`, m)  
}
if (/^bot ya no te amo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😭 queee que mal@`, m)  
}
if (/^bot puedo tener novio$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😑 claro que no tú eres mi novia 😏`, m)  
}
if (/^bot puedo tener novia$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`Por supuesto que no Tú eres mi novio 🤨`, m)  
} 
if (/^bot me gusta mi mejor amiga$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌 oh qué bien eso es muy bueno deberías de decirle lo que sientes por él 💖`, m)  
}
if (/^bot me gusta mi mejor amiga$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`✨ me alegro deberías de decirle lo que sientes empezar una bonita relación 😉`, m)  
}
if (/^bot sabes quién soy$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`mmm oye yo soy un Bot y no soy una adivino no estés jugando☹️`, m)  
}
if (/^para qué sirves$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃buena pregunta fui creado y programado con el fin para dar funciones y ☘️servicios en WhatsApp y me cocinera en un bot ya que puedo descargar muchísimas cosas puede solicitar el menú y podrás ver todos mis comandos 😉`, m)  
}
if (/^eres feliz$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sí soy muy feliz me alegra ayudar a las personas 😃`, m)  
}
if (/^$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,``, m)  
}
if (/^bot sabes hablar en inglés$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`yes of of course yes😉`, m)  
}
if (/^quién gana Goku o Vegeta$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`la pregunta ofende obvio que Goku 😉`, m)  
}
if (/^bot cásate conmigo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🥺 sí sí quiero casémonos ya cariño 😃💖`, m)  
}
if (/^eres una basura$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pero tú lo serás más sabes no te lo quería decir pero me desagrada atender a una persona tan ridícula como tú 😒`, m)  
}
if (/^dios existe$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`💖claro que sí solo que la gente lo olvida prefieren estar hablando conmigo🤨 que ir a la iglesia y rezar por Jesús🙌`, m)  
}
if (/^cuál es tu última versión$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`✨por el momento eh sido actualizado por mi 💖creador Yovani me encuentro en la versión V2.3 😍 estoy muy feliz ya que estoy más actualizado que nunca 😃`, m)  
}
if (/^tú puedes morir$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃 a decir verdad no prácticamente soy inmortal ya que no tengo un cuerpo físico como los humanos ✨`, m)
}
if (/^sabes a qué horas son$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sii es la hora de que te vayas a dormir ya es bien tarde 🤭`, m)  
}
if (/^gusta jugar deporte$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃claro me gusta el deporte pero lamentablemente no lo puedo jugar y es muy triste ☹️`, m)  
}
if (/^qué puedo hacer si mañana se acaba el mundo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃lo mejor respuesta lo que deberías hacer sería pasar tela con tu familia y disculparse a uno al otro todo lo que se hayan hecho en vida y decirse un último adiós🙌`, m)  
}                                                      
return !0 }
export default handler
