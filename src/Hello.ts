import Sheet from './class/Sheet'

const greet = (name: string) => {
  return `hello ${name}`
}

function test () {
  const sheet = new Sheet(`${configConst.FILE_PREFIX}-sheet`)
}

function searchMail () {
  const threads = GmailApp.search('お問い合わせ', 0, 30)
  const msgs = GmailApp.getMessagesForThreads(threads)

  msgs.forEach(msg => {
    Logger.log(msg[0].getSubject())
  })
}
