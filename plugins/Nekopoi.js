import nekopoi from 'nekobcc'
let handler = async(m, { conn, usedPrefix, args, command }) => {
    if(!args[0]) throw `Harap masukkan URL sebagai parameter!\n\nContoh: ${usedPrefix + command} https://nekopoi.care/xxx-xxx-episode-1`
    nekopoi.search(args[0])
    .then(async data => {   
    let caption = `                   *「 Nekopoi :v 」*
    await conn.sendHydrated(m.chat, caption, global.wm, data.medias[1].url, `${args[0]}`, '🌎 L I N K', null, null, [[null, null],[null,null],[null,null]], m) 
    })
}
handler.command = /^(nekosearch)$/i
handler.tags = ['downloader']
handler.help = ['neko <url>']

export default handler
