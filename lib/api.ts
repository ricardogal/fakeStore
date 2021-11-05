import fs from "fs";
import { join } from "path";

export function getAllProducts(fields: string[] = []) {
  return fetch("https://fakestoreapi.com/products");
}

export function getProduct(id: BigInteger) {
  return fetch(`https://fakestoreapi.com/products/${id}`);
}
