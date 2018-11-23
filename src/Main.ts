import Sheet from './class/Sheet'

function exec () {
  // 前回結果を読み込み
  Logger.log('load result')

  // 検索条件を作成
  Logger.log('crate search term')

  // 検索
  Logger.log('serach gmail')

  // Postデータを作成
  Logger.log('crate post data')

  // Post処理
  Logger.log('post data')

  // 処理結果を記録
  Logger.log('write result')
}

function searchMail () {
  const threads = GmailApp.search('お問い合わせ', 0, 30)
  const msgs = GmailApp.getMessagesForThreads(threads)

  msgs.forEach(msg => {
    Logger.log(msg[0].getSubject())
  })
}
