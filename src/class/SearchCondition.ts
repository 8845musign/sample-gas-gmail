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

  /**
   * 前回の実行結果から新しい検索条件を作成する
   * @param prevConditionRecord
   */
  public static createFromPrevCond (prevConditionRecord: SearchCondition) {
    let start

    if (!prevConditionRecord.end) {
      start = prevConditionRecord.start
    } else {
      start = prevConditionRecord.end
    }

    return new SearchCondition(start, new Date().toDateString())
  }
}
