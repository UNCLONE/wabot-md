/*
Numpang Recode bang github: rashidsiregar28
*/

"use strict";
const { default: makeWASocket, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, delay, useSingleFileAuthState } = require("@adiwajshing/baileys-md")
const figlet = require("figlet");
const fs = require("fs");
const P = require('pino')
const { color, BotLog } = require("./lib/color");
let setting = JSON.parse(fs.readFileSync('./config.json'));
let sesion = `./${setting.sessionName}.json`
const { state, saveState } = useSingleFileAuthState(sesion)

const start = async () => {
    //Meng weem
	console.log(color(figlet.textSync(setting.botName + ' MD', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ By Akmalz ]'))
    // set level pino ke 'fatal' kalo ga mau nampilin log eror
    const chika = makeWASocket({ printQRInTerminal: true, logger: P({ level: 'warn' }), browser: [`${setting.botName} By Akmalz`], auth: state }) 
    console.log(color('Connected....'))
    chika.multi = true
    chika.nopref = false
    chika.prefa = 'anjing'

    chika.ev.on('messages.upsert', async m => {
    	if (!m.messages) return
        const msg = m.messages[0]
        if (!msg.message) return
        require('./message/chika')(chika, msg, m)
    })

    chika.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            console.log(ChikaLog('Koneksi terputus....'))
            if (lastDisconnect.error?.output?.statusCode === DisconnectReason.loggedOut) console.log(BotLog('Wa web terlogout.'))
            else start()
        }
    })

    chika.ev.on('creds.update', () => saveState)

    return chika
}

start()
.catch(err => console.log(err))
