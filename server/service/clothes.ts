import { PrismaClient } from '@prisma/client'
import { Clothes, ClothesUpdateInput } from '$prisma/client'

const prisma = new PrismaClient()

export const getClothes = async (limit?: number) =>
  (await prisma.clothes.findMany()).slice(0, limit)

export const registerClothes = (
  name: Clothes['name'],
  category: Clothes['category'],
  color: Clothes['color'],
  size: Clothes['size']
) => prisma.clothes.create({ data: { name, category, color, size } })

export const updateClothes = (
  id: Clothes['id'],
  partialClothes: ClothesUpdateInput
) => prisma.clothes.update({ where: { id }, data: partialClothes })

export const deleteClothes = (id: Clothes['id']) =>
  prisma.clothes.delete({ where: { id } })
