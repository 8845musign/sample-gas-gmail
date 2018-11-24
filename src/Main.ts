import SpreadSheet from './class/SpreadSheet'
import ProcessLogSheet from './class/ProcessLogSheet'
import SearchCondition from './class/SearchCondition'
import { configConst } from './config/const'

function exec () {
  const spreadSheet = new SpreadSheet(`${configConst.FILE_PREFIX}-sheet`)
  const processLogSheet = new ProcessLogSheet(spreadSheet)

  // 前回結果を読み込み
  const log = processLogSheet.read()
  Logger.log(`前回開始: ${log.start}`)
  Logger.log(`前回終了: ${log.end}`)

  // 検索条件を作成
  const searchCondition = SearchCondition.createFromLog(log)
  Logger.log(
    `crate search condition: ${searchCondition.start} - ${searchCondition.end}`
  )

  processLogSheet.clear()
  processLogSheet.recordStart(searchCondition.start)

  // 検索
  Logger.log('serach gmail')

  // Postデータを作成
  Logger.log('crate post data')

  // Post処理
  Logger.log('post data')

  // 処理結果を記録
  // ここまでに異常終了したら次回実行範囲に失敗分が含まれる
  processLogSheet.recordEnd(searchCondition.end)
}

function searchMail () {
  const threads = GmailApp.search('お問い合わせ', 0, 30)
  const msgs = GmailApp.getMessagesForThreads(threads)

  msgs.forEach(msg => {
    Logger.log(msg[0].getSubject())
  })
}
