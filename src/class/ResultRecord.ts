import Sheet from './Sheet'

interface Result {
  start?: string
  end?: string
}

export default class ResultRecord {
  sheet: Sheet

  constructor (sheet: Sheet) {
    this.sheet = sheet
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
