import SpreadSheet from './SpreadSheet'

const reusltSheetName = '結果'

export interface ProcessLog {
  start: Date
  end: Date
}

export default class ProcessLogSheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet
  startCell = 'B1'
  endCell = 'B2'

  constructor (spreadSheet: SpreadSheet) {
    this.sheet = spreadSheet.getSheet(reusltSheetName)
  }

  load (): ProcessLog {
    const startCell = this.sheet.getRange(this.startCell).getValue()
    const startDate = new Date(startCell.toString())

    const endCell = this.sheet.getRange(this.endCell).getValue()
    const endDate = new Date(endCell.toString())

    return {
      start: startDate,
      end: endDate
    }
  }

  recordStart (start: Date): void {
    this.sheet.getRange(this.startCell).setValue(start)
  }

  recordEnd (end: Date): void {
    this.sheet.getRange(this.endCell).setValue(end)
  }

  clear (): void {
    this.sheet.getRange(this.startCell).clear()
    this.sheet.getRange(this.endCell).clear()
  }
}
