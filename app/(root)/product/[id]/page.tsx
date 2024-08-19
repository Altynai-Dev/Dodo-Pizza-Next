/* eslint-disable @next/next/no-img-element */
import { Container,  GroupVariants, Title} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
export default async function ProductPage({params : {id}}:{params: {id: string}}) {
    const product = await prisma.product.findFirst({where : {id: Number(id)}});

    if(!product){
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
            <div className="flex items-center justify-center flex-1 relative w-full">
        <img src={product.imageUrl} alt={product.name} className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'/>
      </div>
                <div className="w-[498px] bg-[#FCFCFC] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1" />
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quisquam?</p>

                    <GroupVariants                         selectedValue="2"
                        items={[
                        {
                            name: "Маленькая",
                            value: "1"
                        },
                        {
                            name: "Средняя",
                            value: "2"
                        },
                        {
                            name: "Большая",
                            value: "3"
                        }
                    ]} />
                </div>
            </div>
        </Container>
    )
}