module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './db.sqlite'
  },
  migrations: {
    tableName: 'migrations',
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}
