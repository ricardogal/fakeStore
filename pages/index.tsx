import { getAllProducts, getProduct } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Product from '../types/product'

type Props = {
  allProducts: Product[],
  item: Product
}

const Index = ({ allProducts, item }: Props) => {
  const selectedProduct = allProducts[0]
  return (<>
    <p>{selectedProduct.title}</p>
    <p>{selectedProduct.price}</p>
    <p>{selectedProduct.description}</p>
    <hr />
    <p>{item.id}</p>
    <p>{item.title}</p>
    <p>{item.description}</p>
  </>)
}

export default Index

export const getStaticProps = async () => {
  const list = await getAllProducts([
    'id',
    'title',
    'price',
    'description',
    'category',
    'image',
    'rating',
    'rate',
    'count',
  ])

  let item = await getProduct(20)
  item = await item.json()

  const allProducts = await list.json()

  return {
    props: { allProducts, item },
  }
}