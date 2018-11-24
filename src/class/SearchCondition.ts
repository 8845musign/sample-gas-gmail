import { ProcessLog } from './ProcessLogSheet'

export default class SearchCondition {
  start: Date
  end: Date

  constructor (start?: Date, end?: Date) {
    this.start = start
    this.end = end
  }

  public setStart (start: Date): void {
    this.start = start
  }

  public setEnd (end: Date): void {
    this.end = end
  }

  public static createFromLog (log: ProcessLog): SearchCondition {
    let start

    if (!log.start) {
      // この場合処理実行されない
      start = new Date()
    } else if (!log.end) {
      start = new Date(log.start)
    } else {
      start = new Date(log.end)
    }

    return new SearchCondition(start, new Date())
  }
}
