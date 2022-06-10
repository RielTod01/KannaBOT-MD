import fetch from 'node-fetch'
let handler = async (m { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
let res = await fetch('https://api.lolhuman.xyz/api/tiktok?apikey=SGWN&url=${args[0]}'))
        let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.link, wm, m)

}, 
      conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: 'https://vt.tiktok.com' ,
    mediaType: 2,
    description: wm , 
    title: '               「🇹」 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ',
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(thumb)).buffer(),
    sourceUrl: sgc
     }}
  })
 conn.sendButtonVid(m.chat, json.result.link, wm, m)
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)nowm(dl)?(download(er)?)?$/i


export default handler
