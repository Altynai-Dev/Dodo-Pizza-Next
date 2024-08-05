import { ProductCard } from "@/components/shared";

export default function ProductPage({params : {id}}:{params: {id: string}}) {
    return <p> product {id}</p>
}