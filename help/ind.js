const os = require('os')

exports.wait = () => {
    return `_wait_`
}

exports.ok = () => {
    return `_done_`
}

exports.err = () => {
    return `_error_`
}

exports.wrongFormat = (prefix) => {
    return `Format salah‼️ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu* ❎`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner!`
}

exports.doneOwner = () => {
    return `✔ Selesai...`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 ✓ 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.listMenu = (time, date, salam, pushname, prefix, regUser, ping, latensi, runtime) => {
   let i = 0
    return `
*Selamat ${salam} ${pushname}*                                      

• *Bantu SubScribe*
   Link : https://youtube.com/c/ismailkurama


🤖 *INFO*
*${i+=1}.* ${prefix}owner
*${i+=1}.* ${prefix}rules
*${i+=1}.* ${prefix}donate

🧑 *OWNER*
*${i+=1}.* > *evaluate*
*${i+=1}.* $ *exec*
*${i+=1}.* ${prefix}join *link*
*${i+=1}.* ${prefix}setppbot *(tag/send image)*

⚙️ *GROUP*
*${i+=1}.* ${prefix}revoke
*${i+=1}.* ${prefix}leave
*${i+=1}.* ${prefix}group *open/close*

😷 *WEEBS*
*${i+=1}.* ${prefix}anime *query*
*${i+=1}.* ${prefix}manga *query*
*${i+=1}.* ${prefix}character *query*

🔍 *MISC*
*${i+=1}.* ${prefix}film *query*
*${i+=1}.* ${prefix}wattpad *query*
*${i+=1}.* ${prefix}webtoons *query*
*${i+=1}.* ${prefix}drakor *query*
*${i+=1}.* ${prefix}pinterest *query*
*${i+=1}.* ${prefix}wiki *query*

🎞 *MEDIA*
*${i+=1}.* ${prefix}toimg *(tag sticker)*

⬇️ *DOWNLOADER* 
*${i+=1}.* ${prefix}tiktok *link*
*${i+=1}.* ${prefix}play *query*
*${i+=1}.* ${prefix}ytmp3 *link*
*${i+=1}.* ${prefix}ytmp4 *link*
*${i+=1}.* ${prefix}facebook *link*
*${i+=1}.* ${prefix}twitter *link*
*${i+=1}.* ${prefix}instagram *link*
`
}

exports.rules = (prefix, botName) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa alasan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok saya chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan *${botName}* di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Terima Suwon! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan *${botName}*
🙏


    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
0838-0527-9906 (Pulsa10k)

Berapapun donasi kalian akan sangat berarti 👍

Matur Thankyou!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

    `
}
