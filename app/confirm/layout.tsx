import RootBody from "../rootBody";
import AddressBox from "@/components/addressBox";
import NavigationBar from "@/components/navigationBar";
import { ReactQueryClientProvider } from "../reactQueryProvider";

export default function ConfrimLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <section className='bg-white m-0 h-fit p-5'>
            <div className="text-center ">
                <span className="font-bold text-lg text-gray-800 block my-3">Confirm Order</span>
            </div>
            <AddressBox />
            <RootBody>
                {children}
                <NavigationBar />
            </RootBody>
        </section>
    );
}
