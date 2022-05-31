import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/elaina?apikey=SGWN'
	conn.sendButton(m.chat, 'Elaina? ', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(elaina)$/i
handler.tags = ['anime']
handler.help = ['elaina']

export default handler
