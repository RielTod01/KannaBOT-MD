import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://caliphapi.com/api/ppcouple?apikey=KTyuT3UV')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.female, 'cewe.jpg','Girl', m)
conn.sendFile(m.chat, json.result.male,'pria.jpg',  'Boy', m)

}
handler.help = ['ppcp']
handler.tags = ['anime']
handler.command = /^ppcp$/i


export default handler
