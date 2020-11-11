import { Clothes } from '$prisma/client'

export type Methods = {
  get: {
    resBody: string
  }
  post: {
    reqBody: { name: string; category: string; color: string; size: string }
    resBody: Clothes
  }
}
