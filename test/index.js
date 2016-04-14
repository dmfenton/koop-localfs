const test = require('tape')
const Filesystem = require('../')

const fs = new Filesystem({rootDir: '/var/files'})

test('Resolving a relative path', t => {
  const path = fs.realpathSync('foo/bar')
  t.equal(path, '/var/files/foo/bar')
  t.end()
})

test('Resolving an absolute path', t => {
  const path = fs.realpathSync('/foo/bar')
  t.equal(path, '/var/files/foo/bar')
  t.end()
})
