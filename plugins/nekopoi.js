import { getVideo } from '../lib/nekopoi'
let handler = async (m, { text }) => {
 if (!text) throw 'Tidak Ada Url'
 let { title, links } = await getVideo(text)
 if (links.length == 0) throw 'Video Tidak Ditemukan!'
 teksnya = `*[NEKOPOI DOWNLOADER]*\n\nTitle : ${title}\n\n${links.join('\n')}`
 m.reply(teksnya.trim())
}
handler.help = ['nekodl', 'nekopoi'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = false
handler.premium = false
handler.register = true
handler.command = /^nekodl$/i

export default handler
