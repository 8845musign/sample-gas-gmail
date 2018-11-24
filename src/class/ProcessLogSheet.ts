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
  startRange: GoogleAppsScript.Spreadsheet.Range
  endRange: GoogleAppsScript.Spreadsheet.Range

  constructor (spreadSheet: SpreadSheet) {
    this.sheet = spreadSheet.getSheet(reusltSheetName)
    this.startRange = this.sheet.getRange(this.startCell)
    this.endRange = this.sheet.getRange(this.endCell)
  }

  read (): ProcessLog {
    const startCell = this.startRange.getValue()
    const startDate = new Date(startCell.toString())

    const endCell = this.endRange.getValue()
    const endDate = new Date(endCell.toString())

    return {
      start: startDate,
      end: endDate
    }
  }

  recordStart (start: Date): void {
    this.startRange.setValue(start)
  }

  recordEnd (end: Date): void {
    this.endRange.setValue(end)
  }

  clear (): void {
    this.startRange.clear()
    this.endRange.clear()
  }
}
