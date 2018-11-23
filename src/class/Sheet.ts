export default class Sheet {
  file: GoogleAppsScript.Spreadsheet.Spreadsheet

  constructor (name: string) {
    const fileIt = DriveApp.getFilesByName(name)
    Logger.log(fileIt)

    if (fileIt.hasNext()) {
      this.file = SpreadsheetApp.open(fileIt.next())
    } else {
      this.file = SpreadsheetApp.create(name)
    }
  }
}
