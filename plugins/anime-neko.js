import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://api.lolhuman.xyz/api/random/neko?apikey=SGWN')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['Next','.neko']],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
