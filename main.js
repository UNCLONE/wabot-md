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

> // Message Loader
let messageFolder = path.join(__dirname, '../message')
let messageFilter = filename => /\.js$/.test(filename)
global.messages = {}
for (let filename of fs.readdirSync(messageFolder).filter(messageFilter)) {
  try {
    global.message[filename] = require(path.join(messageFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.message[filename]
  }
}

const start = async () => {
    //Meng weem
	console.log(color(figlet.textSync(setting.botName + ' MD', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ By Akmalz ]'))
    // level pino 'fatal','warn', 'debug'
    const ltzx = makeWASocket({ printQRInTerminal: true, logger: P({ level: 'debug' }), browser: [`${setting.botName} By Akmalz`], auth: state }) 
    ltzx.multi = true
    ltzx.nopref = false
    ltzx.prefa = 'anjing'
    console.log(color('Connected....'))
    ltzx.ev.on('messages.upsert', async m => {
    	if (!m.messages) return
        const msg = m.messages[0]
        if (!msg.message) return
        require('./message/index')(ltzx, msg, m)
    })

    ltzx.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            console.log(BotLog('connection closed, try to restart'))
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
            ? start()
            : console.log(BotLog('Wa web terlogout.'))
        }
    })

    ltzx.ev.on('creds.update', () => saveState)

    return ltzx
}

start()
.catch(err => console.log(err))
