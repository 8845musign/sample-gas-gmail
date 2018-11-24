import SpreadSheet from './SpreadSheet'

const reusltSheetName = '結果'
const startCell = 'B1'
const endCell = 'B2'

export interface ProcessLog {
  start: string
  end: string
}

export default class ProcessLogSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet

  constructor (spreadSheet: SpreadSheet) {
    this.sheet = spreadSheet.getSheet(reusltSheetName)
  }

  load (): ProcessLog {
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

  clear (): void {
    this.sheet.getRange(startCell).clear()
    this.sheet.getRange(endCell).clear()
  }
}
