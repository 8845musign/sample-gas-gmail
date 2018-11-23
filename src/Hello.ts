import Sheet from './class/Sheet'

const greet = (name: string) => {
  return `hello ${name}`
}

function test () {
  const sheet = new Sheet(`${configConst.FILE_PREFIX}-sheet`)
}
