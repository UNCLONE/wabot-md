"use strict";

//Module
const { 
     default: makeWASocket, 
     BufferJSON, 
     initInMemoryKeyStore, 
     DisconnectReason, 
     MessageType,
     MessageOptions, 
     MimeType,
     downloadContentFromMessage
 } = require("@adiwajshing/baileys-md");
const fs = require("fs");
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const xfar = require('xfarr-api');
const axios = require('axios')
const fetch = require('node-fetch')
let cheerio = require("cheerio")
const os = require("os");                                                                       
const speed = require('performance-now');

const yts = require('yt-search')                                                                                                

//Library
const { color, bgcolor } = require("../lib/color");
const ind = require('../help/ind.js')
const { yta, ytv, igdl, upload, formatDate, ttdownloader } = require('../lib/ytdl')
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, convert, convertGif, convertSticker } = require("../lib/myfunc");
const setting = JSON.parse(fs.readFileSync('./config.json'));
const pendaftar = JSON.parse(fs.readFileSync('./lib/json/AutoRegUser.json'))
let {
    ownerNumber,
    botName
} = setting

moment.tz.setDefault("Asia/Jakarta").locale("id");
     
module.exports = async(ltzx, msg, m) => {

    let chika = ltzx
    let syauqun = ltzx
    let dvnz = ltzx
    let hexa = ltzx
    let mek = msg

    try {
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const date = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD-MM-YYYY')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const fromMe = msg.key.fromMe
	const from = msg.key.remoteJid
	const type = Object.keys(msg.message)[0]
        const content = JSON.stringify(msg.message)
        const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : ''
        if (chika.multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.,\/\\©^]/gi) : '#'
        } else {
            if (chika.nopref){
                prefix = ''
            } else {
                prefix = chika.prefa
            }
        }
	const args = chats.split(' ')
	const command = chats.toLowerCase().split(' ')[0] || ''
        const isGroup = msg.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
        const pushname = msg.pushName
        const isCmd = command.startsWith(prefix)
        const q = chats.slice(command.length + 1, chats.length)
        const body = chats.startsWith(prefix) ? chats : ''
        const botNumber = chika.user.id.split(':')[0] + '@s.whatsapp.net'
        const groupMetadata = isGroup ? await chika.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(sender) || false
        const isOwner = ownerNumber.includes(sender)

	const isUrl = (uri) => {
	    return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
	}
        const jsonformat = (json) => {
            return JSON.stringify(json, null, 2)
        }

        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedMsg = (type == 'extendedTextMessage')
        const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
        const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

        const _0x2b4580=_0x782d;(function(_0x2bd6ea,_0x535be8){const _0x3f83af=_0x782d,_0x3299f3=_0x2bd6ea();while(!![]){try{const _0x17b94d=-parseInt(_0x3f83af(0x109))/0x1+parseInt(_0x3f83af(0x10a))/0x2+parseInt(_0x3f83af(0x103))/0x3+parseInt(_0x3f83af(0x10d))/0x4+parseInt(_0x3f83af(0x102))/0x5*(-parseInt(_0x3f83af(0x101))/0x6)+parseInt(_0x3f83af(0x108))/0x7+-parseInt(_0x3f83af(0x10b))/0x8;if(_0x17b94d===_0x535be8)break;else _0x3299f3['push'](_0x3299f3['shift']());}catch(_0x33ed61){_0x3299f3['push'](_0x3299f3['shift']());}}}(_0x1eb6,0x8fa73));function _0x782d(_0x48d01b,_0x142834){const _0x1eb6da=_0x1eb6();return _0x782d=function(_0x782d44,_0x49e179){_0x782d44=_0x782d44-0xfe;let _0x240285=_0x1eb6da[_0x782d44];return _0x240285;},_0x782d(_0x48d01b,_0x142834);}const downloadAndSaveMediaMessage=async(_0x4d9c7a,_0x5b14d2=_0x2b4580(0x10c))=>{return new Promise(async(_0x47a079,_0x3cd252)=>{const _0x4287ec=_0x782d;let _0x3bb4fa=_0x4d9c7a+_0x4287ec(0x106),_0x598ae7;if(msg[_0x4287ec(0xfe)][_0x4287ec(0x105)]==null)_0x598ae7=await downloadContentFromMessage(msg['message'][_0x3bb4fa],_0x4d9c7a);else _0x598ae7=await downloadContentFromMessage(msg['message']['extendedTextMessage'][_0x4287ec(0xff)][_0x4287ec(0x104)][_0x3bb4fa],_0x4d9c7a);let _0x2552a6=Buffer[_0x4287ec(0x107)]([]);for await(const _0x123d13 of _0x598ae7){_0x2552a6=Buffer[_0x4287ec(0x100)]([_0x2552a6,_0x123d13]);}fs[_0x4287ec(0x10e)](_0x5b14d2,_0x2552a6),_0x47a079(_0x5b14d2);});};function _0x1eb6(){const _0x29315d=['684995hXMwBO','2090202ATimZE','quotedMessage','extendedTextMessage','Message','from','7456218LtEByY','1060862GOIGho','1190916LgaYXK','7861760akaXHO','undefined','2194468ZvDTNg','writeFileSync','message','contextInfo','concat','12xmZPjY'];_0x1eb6=function(){return _0x29315d;};return _0x1eb6();}
        const reply = (teks, men) => {
             return chika.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: msg })
        }
        const textImg = (teks, buffer = fs.readFileSync(setting.pathImg), mess, men) => {
             return chika.sendMessage(from, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: mess ? mess : msg })
        }
        const sendMess = (from, teks) => {
             return chika.sendMessage(from, { text: teks })
        }
        //let capt, gambar;
          //capt = 'test button 5'
          //gambar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6f93asR9RyFlatpRvBWb5hZA42HvwFuWXQ&usqp=CAU'
          let gambar_ = fs.readFileSync(setting.pathImg) // getBuffer(gambar);
          let Hasil = gambar_
        const buttonWA_ = (from, caption, button) => {
            let butfive = ltzx.generateWAMessageFromContent(from, { "templateMessage": { "hydratedTemplate": {"imageMessage": Hasil, "hydratedContentText": caption, "hydratedFooterText": `*© ${setting.botName}*`,"hydratedButtons": button }, "hydratedFourRowTemplate": {"imageMessage": Hasil, "hydratedContentText": caption, "hydratedButtons": button }}}, {quoted: msg})
            return ltzx.relayMessage(butfive, {waitForAck: true})
        }

        const sendContact = (jid, numbers, name, quoted, men) => {
            let number = numbers.replace(/[^0-9]/g, '')
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:' + name + '\n'
            + 'ORG:;\n'
            + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
            + 'END:VCARD'
            return chika.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : men ? men : []},{ quoted: quoted })
        }

        const sendFileFromUrl = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return chika.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return chika.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
            } else if(mime.split("/")[0] === "video"){
                return chika.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
            } else if(mime.split("/")[0] === "audio"){
                return chika.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
            } else if(mime.split("/")[0] === "document"){
                return chika.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: msg })
            }
        }

        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
            if (type == 'image') {
                chika.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(setting.pathImg), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: quoted})
            } else if (type == 'video') {
                if (options === undefined || options === null) return reply('illegal method, chat owner bot')
                chika.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: quoted})
            } else if (type == 'location') {
                chika.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(setting.pathImg) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
            } else if (type == 'text') {
                chika.sendMessage(from, { text: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: quoted})
            } else {
                reply('invalid type, please contact the owner bot')
            }
        }

        if (isCmd && !isGroup) {
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }

        // Auto Regist
	const isAutoRegUser = pendaftar.includes(sender)
	if (isCmd && !isAutoRegUser){
		pendaftar.push(sender)
		fs.writeFileSync('./lib/json/AutoRegUser.json', JSON.stringify(pendaftar))
	}
	const regUser = pendaftar.length
                                       
  const timestamp = speed();                                         
  const latensi = speed() - timestamp                                
                                                                     
const ping = moment().millisecond()

async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
    const $ = cheerio.load(link.data)
    let judul = $('#firstHeading').text().trim()
    let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
    let isi = []
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      let penjelasan = $(Ra).find('p').text().trim()
      isi.push(penjelasan)
    })
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      }
      return data
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: eror
    }
    return notFond
  }
}
// BY RIZKY ADI

        if (isOwner){
            if (chats.startsWith("> ")){
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }

	switch (command) {
            //Sistem Command
                  case 'test5button':
                let butV = [
                    {
                        "urlButton": {
										"displayText": "instagram",  //5 Buttons bagian web
										"url": "https://instagram.com/justme.akmall"
									},
									"index": 0
								},
								{
									"callButton": { //5 Buttons bagian telepon 
										"displayText": "number",
										"phoneNumber": "628885960825@s.whatsapp.net"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "halo",
										"id": ".tos"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": "test2",
										"id": ".rule"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": "test3",
										"id": ".help"
									},
                     }
                  ]
                buttonWA_(from, `Hai kak ${pushname}, selamat ${salam}`, butV)
                break
            case prefix+'rule': case prefix+'rules':
                textImg(ind.rules(prefix, botName))
            break
            case prefix+'tos': case prefix+'donate': case prefix+'donasi':
                textImg(ind.tos(ownerNumber[0].split('@')[0], prefix))
            break
            case prefix+'owner':
                for (let x of ownerNumber) {
                    sendContact(from, x.split('@s.whatsapp.net')[0], 'Owner of - ' + botNumber, msg)
                }
            break
            case prefix+'menu': case prefix+'help':{
                // I try buttonMessage in personal chats, not responding :(
                const menyo = `Hai kak ${pushname} 👋, saya *${botName}*\n\nBot ini adalah Beta *Multi-Device* Whatsapp. Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏`
                if (isGroup) {
                    let buttons = [
                        {buttonId: `${prefix}allmenu`, buttonText: {displayText: 'List Menu'}, type: 1},
                        {buttonId: `${prefix}rule`, buttonText: {displayText: 'Rules Bot' }, type: 1}
                    ]
                    sendButton('location', from, menyo, buttons)
               } else {
                   textImg(`Hai kak ${pushname} 👋, saya *${botName}*\n\nBot ini adalah Beta *Multi-Device* Whatsapp. Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏.\n\nKetik *${prefix}allmenu* untuk membuka fitur yang tersedia`)
                }
            }
            break
            case prefix+'allmenu': {
                try {
                    var prof = await chika.profilePictureUrl(sender, 'image')
                } catch {
                    var prof = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                sendFileFromUrl(from, prof, ind.listMenu(time, date, salam, pushname, prefix, regUser, ping, latensi), msg)
            }
            break
            // Owner
            case prefix+'join': case prefix+'joingc': {
                if (!isOwner && !fromMe) return reply(ind.ownerOnly())
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('chat.whatsapp.com')) return textImg(ind.wrongFormat(prefix))
                let query = q.split('https://chat.whatsapp.com/')[1]
                let data = await chika.groupAcceptInvite(query)
                await reply(jsonformat(data))
                }
            break
            case prefix+'setpp': case prefix+'setppbot':
                if (!isOwner && !fromMe) return reply(ind.ownerOnly())
                if (isImage || isQuotedImage) {
                    let img = await downloadAndSaveMediaMessage('image','ppgroup.jpeg')
                    await chika.updateProfilePicture(botNumber, { url: img}).then(res => fs.unlinkSync(img))
                    await reply(ind.doneOwner())
                } else {
                    reply(ind.wrongFormat(prefix))
                }
            break
            //Group Sistem
            case prefix+'revoke':
                if (!isGroup) return reply(ind.groupOnly())
                if (!isGroupAdmins) return reply(ind.adminOnly())
                if (!isBotGroupAdmins) return reply(ind.botNotAdmin())
                let link = await chika.groupRevokeInvite(from)
                await textImg(ind.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case prefix+'leave':
                if (!isGroup) return reply(ind.groupOnly())
                if (!isGroupAdmins) return reply(ind.adminOnly())
                if (!isBotGroupAdmins) return reply(ind.botNotAdmin())
                reply('Sayonara~ 👋').then(async res => await chika.groupLeave(from))
            break
            case prefix+'group': case prefix+'grup':
                if (!isGroup) return reply(ind.groupOnly())
                if (!isGroupAdmins && !isOwner) return reply(ind.adminOnly())
                if (args.length === 1) return reply(ind.wrongFormat())
                if (args[1].toLowerCase() === 'open'){
                    await chika.groupSettingUpdate(from, 'not_announcement')
					reply(ind.ok())
                } else if (args[1].toLowerCase() === 'close'){
                    await chika.groupSettingUpdate(from, 'announcement')
                    reply(ind.ok())
                } else {
                    reply(ind.wrongFormat())
                }
            break
            // Education
            case prefix+'wiki':
                if (!q) return textImg(ind.wrongFormat(prefix))
                wikipedia(q).then(async res => {
                        wikires = `*${res.result.judul}*\n\n${res.result.isi}`
                        await sendFileFromUrl(from,res.result.thumb,wikires,msg)
                        // textImg(`*${res.result.judul}*\n\n${res.result.isi}`)
                        })
                        .catch(() => { 
                           textImg(err) 
                        })
     
            break
            //Weebs
            case prefix+'anime':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'character': case prefix+'karakter':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'manga':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Manga('naruto').then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                   // for (let x of ownerNumber) {
                   //     sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                   // }
                    textImg(err)
                })
            break
            //Misc
            case prefix+'film':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Film(q).then(async data => {
                    let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*🎞️ Type :* ${i.type}\n`
                        txt += `*📟 Quality :* ${i.quality}\n`
                        txt += `*📮Upload :* ${i.upload}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumb,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'pinterest': case prefix+'pin':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Pinterest(q).then(async data => {
                    await sendFileFromUrl(from,data.url,ind.ok(),msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'wattpad':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Wattpad(q).then(async data => {
                    let txt = `*----「 WATTPAD-SEARCH 」----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👀 Reads :* ${i.dibaca}\n`
                        txt += `*🗣️ Voting :* ${i.divote}\n`
                        txt += `*🗂️ Bab :* ${i.bab}\n`
                        txt += `*⏳Time :* ${i.waktu}\n`
                        txt += `*📚 Url :* ${i.url}\n`
                        txt += `*🏷️ Description :* ${i.description}\n -----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumb,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'drakor':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Drakor(q).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'webtonsearch': case prefix+'webtoon':
                if (!q) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await textImg(txt)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            //Convert and Media
            case prefix+'toimg': case prefix+'stickertoimg': case prefix+'stoimg': case prefix+'stikertoimg': 
				if (isQuotedSticker) {
			    	let media = await downloadAndSaveMediaMessage('sticker', 'sticker.webp')
			    	if (msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        await textImg(ind.wait())
                        await reply('Maaf, belum support gif')
					} else {
                        await textImg(ind.wait())
			    		let ran = getRandom('.png')
					    exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						    fs.unlinkSync(media)
						    if (err) return textImg('Gagal :V')
						    await chika.sendMessage(from, { image: fs.readFileSync(ran), caption: ind.ok() }, { quoted: msg }).then(res => fs.unlinkSync(ran))
					    })
					}
                } else {
                    textImg(ind.wrongFormat(prefix))
                }
	        break
            //Downloader
            case 'tiktok':
 		if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('tiktok.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
		ttdownloader(q)
    		.then(async result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
               sendFileFromUrl(from,nowm,me,msg)
		//hexa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(err => { reply(err) })
     		break
    case 'tiktokaudio':
 		if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('tiktok.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
 		ttdownloader(q)
    		.then(async result => {
    		const { audio } = result
            sendFileFromUrl(from,audio,'',msg)
    		})
     		.catch(err => { reply(err) })
     		break
            case prefix+'facebook': case prefix+'fb': case prefix+'fbdl': case prefix+'facebookdl':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Facebook(args[1]).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎞️ Type :* ${data.medias[0].extension}\n`
                    txt += `*📟 Quality :* ${data.medias[0].quality}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[0].url,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
            case prefix+'twtdl': case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('twitter.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Twitter(args[1]).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,msg)
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
           case prefix+'ig': case prefix+'igdl': case prefix+'instagram': case prefix+'instagramdl':
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('instagram.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Instagram(args[1]).then(async data => {
                    let txt = `*----「 INSTAGRAM DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎥📸 Total File :* ${data.medias.length}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    await textImg(txt).then(async res => {
                        for (let i of data.medias) {
                            sendFileFromUrl(from, i.url, '', res)
                        }
                    })
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
/*
            case prefix+'ytdl': case prefix+'youtubedl': case prefix+'youtube':
                if (!isGroup) return textImg('Maaf, fitur ini mengandung button, hanya bisa digunakan dalam group\n\nGunakan fitur *${prefix}ytmp3* untuk audio atau *${prefix}ytmp4* untuk video')
                if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return textImg(ind.wrongFormat(prefix))
                await textImg(ind.wait())
                xfar.Youtube(args[1]).then(async (data) => {
                    const buttons = [
                        { quickReplyButton: { displayText: `Audio (${data.medias[7].quality})`, id: `${prefix}ytmp3 ${args[1]}` } },
                        { quickReplyButton: { displayText: `Video (${data.medias[1].quality})`, id: `${prefix}ytmp4 ${args[1]}` } },
                    ]
                    let txt = `*----「 YOUTUBE DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Duration :* ${data.duration}\n`
                    txt += `*📚 Url :* ${data.url}`
                   // let prepare = await prepareMessage({ 'location': { jpegThumbnail: await getBuffer(data.thumbnail) } })
                    sendButton('location', from, txt, buttons, [sender], msg, await getBuffer(data.thumbnail))
                })
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                    textImg(ind.err())
                })
            break
*/
case 'ytsearch':
			if (!q) return reply('Tolong masukan query!')
			var srch = q
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await reply('Error!')
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += ''
    		await textImg(tbuff,ytresult)
			break
				
				case 'ytmp4':
			if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return textImg(ind.wrongFormat(prefix))
				try {
				ytv(q)
				.then(async (res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 50000) return sendFileFromUrl(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`, msg)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendFileFromUrl(from, thumb, captionsYtmp4, msg)
				sendFileFromUrl(from, dl_link, '', msg).catch(() => reply(err))
				})		
				})
				} catch (err) {
			    reply(err)
				}
				break
				
				case 'ytmp3':
			if (!q) return textImg(ind.wrongFormat(prefix))
                if (!isUrl(q)) return textImg(ind.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return textImg(ind.wrongFormat(prefix))
				try {
				reply(mess.wait)
				yta(q)
				.then(async (res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`, msg)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendFileFromUrl(from, thumb, captions, msg)
				sendFileFromUrl(from, dl_link, '', msg).catch(() => reply(err))
				})
				})
				} catch (err) {
				reply(err)
				}
				break
            default:
            if (isCmd) {
               // textImg(ind.cmdNotFound(command, prefix))
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
   
    }
}
