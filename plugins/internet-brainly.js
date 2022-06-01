import fetch from 'node-fetch'

let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. Soalnya mana?\n\ncontoh:\n${usedPrefix + command} Deskripsi tentang kelinci`
    let res = await fetch(`https://api.xteam.xyz/brainly?soal=${text}&APIKEY=f04c164fdec6c033`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    m.reply(json.jawaban)
}
handler.help = ['Brainly <teks>']
handler.tags = ['internet']
handler.command = /^brainly$/i
export default handler
