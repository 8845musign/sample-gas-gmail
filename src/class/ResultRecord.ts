import SpreadSheet from './SpreadSheet'

interface Result {
  start?: string
  end?: string
}

const reusltSheetName = '結果'

export default class ResultRecord {
  sheet: GoogleAppsScript.Spreadsheet.Sheet

  constructor (spreadSheet: SpreadSheet) {
    this.sheet = spreadSheet.getSheet(reusltSheetName)
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
