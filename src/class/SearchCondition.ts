import { ProcessLog } from './ProcessLogSheet'

export default class SearchCondition {
  start: string
  end: string

  constructor (start?: string, end?: string) {
    this.start = start
    this.end = end
  }

  public setStart (start: string) {
    this.start = start
  }

  public setEnd (end: string) {
    this.end = end
  }

  public static createFromLog (log: ProcessLog) {
    let start

    if (!log.start) {
      // この場合処理実行されない
      start = new Date().toDateString()
    } else if (!log.end) {
      start = log.start
    } else {
      start = log.end
    }

    return new SearchCondition(start, new Date().toDateString())
  }
}