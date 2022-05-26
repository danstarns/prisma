import { idForProvider } from '../../_utils/idForProvider'
import testMatrix from '../_matrix'

export default testMatrix.setupSchema(({ provider, providerFeatures, previewFeatures }) => {
  return /* Prisma */ `
    generator client {
      provider = "prisma-client-js"
      previewFeatures = [${providerFeatures}${previewFeatures}]
    }
    
    datasource db {
      provider = "${provider}"
      url      = env("DATABASE_URI_${provider}")
    }
    
    model User {
      id ${idForProvider(provider)}
      email String  @unique
      name  String?
      posts Post[]
    }

    model Post {
      id ${idForProvider(provider)}
      title String
      user   User   @relation(fields: [userId], references: [id])
      userId String
    }
  `
})