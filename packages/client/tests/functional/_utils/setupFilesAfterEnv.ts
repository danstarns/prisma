process.env.PRISMA_HIDE_PREVIEW_FLAG_WARNINGS = 'true'
process.env.DATABASE_URI_sqlite = 'file:dev.db'
process.env.DATABASE_URI_mongodb = process.env.TEST_MONGO_URI
process.env.DATABASE_URI_postgresql = process.env.TEST_POSTGRES_URI
process.env.DATABASE_URI_mysql = process.env.TEST_MYSQL_URI
process.env.DATABASE_URI_cockroachdb = process.env.TEST_COCKROACH_URI
process.env.DATABASE_URI_sqlserver = process.env.TEST_MSSQL_JDBC_URI_MIGRATE

globalThis.testIf = (condition: boolean) => (condition ? test : test.skip)
globalThis.describeIf = (condition: boolean) => (condition ? describe : describe.skip)

export {}
