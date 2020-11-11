import { defineController } from './$relay'
import { registerClothes } from '$/service/clothes'

export default defineController(() => ({
  get: async () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({
    status: 201,
    body: await registerClothes(body.name, body.category, body.color, body.size)
  })
}))
