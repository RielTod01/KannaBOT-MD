import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  m.reply('*Tunggu Sebentar*\nProses...')
  let res = `https://caliphapi.com/api/girlneko?text=${args[0]}&text2=${args[1]}&apikey=KTyuT3UV`
  conn.sendFile(m.chat, res, 'nekologo.jpg', `Sudah jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['tools']
handler.command = /^(logoneko)$/i

export default handler
