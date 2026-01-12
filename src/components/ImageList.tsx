import { getImages } from '@/app/administration/actions'
import StorageImages from './ui/StorageImages'

export default async function ImageList() {
  const images = await getImages()
  return <StorageImages images={images} />
}
