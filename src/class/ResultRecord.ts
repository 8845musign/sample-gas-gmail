import SpreadSheet from './SpreadSheet'

interface Result {
  start?: string
  end?: string
}

export default class ResultRecord {
  spreadSheet: SpreadSheet

  constructor (spreadSheet: SpreadSheet) {
    this.spreadSheet = spreadSheet
  }

  load (): Result {
    return {
      start: null,
      end: null
    }
  }

  recordStart (start: string): boolean {
    Logger.log(`start: ${start}`)

    return true
  }

  recordEnd (end: string): boolean {
    Logger.log(`end: ${end}`)

    return true
  }
}
