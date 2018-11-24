import SpreadSheet from './SpreadSheet'
import { SearchCondition } from '../interface/SearchCondition'

const reusltSheetName = '結果'
const startCell = 'B1'
const endCell = 'B2'

export default class ResultRecord {
  sheet: GoogleAppsScript.Spreadsheet.Sheet

  constructor (spreadSheet: SpreadSheet) {
    this.sheet = spreadSheet.getSheet(reusltSheetName)
  }

  load (): SearchCondition {
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
