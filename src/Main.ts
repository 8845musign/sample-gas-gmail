import SpreadSheet from './class/SpreadSheet'
import ResultRecord from './class/ResultRecord'
import { configConst } from './config/const'

function exec () {
  const spreadSheet = new SpreadSheet(`${configConst.FILE_PREFIX}-sheet`)
  const resultRecord = new ResultRecord(spreadSheet)

  const result = resultRecord.load()
  // 前回結果を読み込み
  Logger.log(`前回開始: ${result.start}`)
  Logger.log(`前回終了: ${result.end}`)

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
