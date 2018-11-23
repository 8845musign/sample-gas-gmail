export default class SpreadSheet {
  file: GoogleAppsScript.Spreadsheet.Spreadsheet
  sheets: GoogleAppsScript.Spreadsheet.Sheet[]

  constructor (name: string) {
    const fileIt = DriveApp.getFilesByName(name)
    Logger.log(fileIt)

    if (fileIt.hasNext()) {
      this.file = SpreadsheetApp.open(fileIt.next())
    } else {
      this.file = SpreadsheetApp.create(name)
    }

    this.sheets = []
  }

  getSheet (sheetName: string): GoogleAppsScript.Spreadsheet.Sheet {
    if (this.sheets[sheetName]) return this.sheets[sheetName]

    this.sheets[sheetName] = this.file.getSheetByName(sheetName)

    return this.sheets[sheetName]
  }
}
