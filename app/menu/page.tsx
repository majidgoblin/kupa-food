"use client"

import ProductBox from "@/components/productBox"
import SearchBox from "@/components/search"
import { IProduct } from "@/types/product"
import { useQuery } from "@tanstack/react-query"
import { NextPage } from "next"

const Menu: NextPage = () => {

    const { data } = useQuery<IProduct[]>({
        queryKey: ['homeProduct'],
        queryFn: () => fetch('/api/homeProducts.json').then(rest => rest.json())
    })

    return (
        <>
            <SearchBox />
            <ul className="flex flex-row justify-between mt-5 ">
                <li>
                    <span className="text-green-900  font-bold underline">All</span>
                </li>
                <li>
                    <span className="text-green-900 ">Seefood</span>
                </li>
                <li>
                    <span className="text-green-900 ">Pizza</span>
                </li>
                <li>
                    <span className="text-green-900 ">Kentuki</span>
                </li>
                <li>
                    <span className="text-green-900 ">Soup</span>
                </li>
            </ul>
            <div className="flex mt-8 justify-around items-start flex-wrap">
                {
                    data?.map((row: IProduct) => {
                        return <div key={row.id} className="my-2">
                            <ProductBox
                                id={row.id}
                                name={row.name}
                                price={row.price}
                                image={row.image} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Menu