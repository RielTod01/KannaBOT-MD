let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	
	// ‼️ NOTE: Link script Jangan diubah, dihapus atau diganti
let text = `❏ *📮 Script Multi Device*
│• *Script :* 
│↳ Private deks⛔
│• *Base :* 
│↳ github.com/bochilgaming/games-wabot-md
┗──────────═┅═──────────

❏ *📮 Script Non MD*
│• *Script :* 
│↳ github.com/kannachann/kanna-wabot-update3
│• *Base :* 
│↳ github.com/bochilgaming/games-wabot
┗──────────═┅═──────────
📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star, follow & kasih credit
• Dilarang menjual Script Ini ketahuan jual langgsung hangus hapus!
• Jika menemukan bug di script, harap lapor owner
• Dilarang reupload sc, Hanya boleh fork
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🐤𝐆𝐈𝐓𝐇𝐔𝐁 𝐀𝐈𝐍𝐊:𝐕🐤', url: sgh}},
    {index: 2, urlButton: {displayText: '🤖𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 𝐑𝐈𝐄𝐋🤖', url: sgc}},
    {index: 3, quickReplyButton: {displayText: '🎮𝐂𝐑𝐄𝐀𝐓𝐎𝐑 𝐁𝐎𝐓🎮', id: '.owner'}},
    {index: 4, quickReplyButton: {displayText: '𝐃𝐎𝐍𝐀𝐒𝐈 𝐂𝐎𝐊🗿', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler
