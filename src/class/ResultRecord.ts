import SpreadSheet from './SpreadSheet'

export interface Result {
  start?: string
  end?: string
}

const reusltSheetName = '結果'
const startCell = 'B1'
const endCell = 'B2'

export default class ResultRecord {
  sheet: GoogleAppsScript.Spreadsheet.Sheet

  constructor (spreadSheet: SpreadSheet) {
    this.sheet = spreadSheet.getSheet(reusltSheetName)
  }

  load (): Result {
    return {
      start: this.sheet
        .getRange(startCell)
        .getValue()
        .toString(),
      end: this.sheet
        .getRange(endCell)
        .getValue()
        .toString()
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
