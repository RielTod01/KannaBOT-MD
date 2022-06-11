import hxz from 'hxz-api'
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm } = p
conn.sendFile(m.chat, nowm, null, '「🇹」 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', m)
}

handler.help = ['tiktok <url>']
handler.command = ['tiktok']
export default handler
