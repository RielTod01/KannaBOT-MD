import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://api.lolhuman.xyz/api/quotes/islami?apikey=SGWN'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { result } = json.result[0]
m.reply(`${json.result}`)
}
handler.help = ['Quotes-Islam']
handler.tags = ['quotes']
handler.command = /^(q-islam)$/i

export default handler
