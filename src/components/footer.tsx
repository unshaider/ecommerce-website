import Link from "next/link"

export default function Footer (){
    return (
        <footer className="grid lg:grid-cols-4 md:grid-cols-2 bg-black text-white px-20 py-20 gap-20">
            <div>
                <h1 className="font-bold text-2xl mb-6">Exclusive</h1>
                <h2 className="font-medium text-xl mb-6">Subscribe</h2>
                <p className="text-base mb-4">Get 10% off your first order</p>
                <input type="email" placeholder="Enter your email" className="py-3 px-4 border-2 border-solid border-white color-white bg-black rounded" />
            </div>
            <div>
                <h2 className="font-medium text-xl mb-5">Support</h2>
                <p className="text-base mb-4">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className="text-base mb-4">exclusive@gmail.com</p>
                <p className="text-base">+88015-88888-9999</p>
            </div>
            <div>
                <h2 className="font-medium text-xl mb-5">Account</h2>
                <ul>
                    <li className="text-base mb-4"><Link href={""}>My Account</Link></li>
                    <li className="text-base mb-4"><Link href={""}>Login / Register</Link></li>
                    <li className="text-base mb-4"><Link href={""}>Cart</Link></li>
                    <li className="text-base mb-4"><Link href={""}>Wishlist</Link></li>
                    <li className="text-base"><Link href={""}>Shop</Link></li>
                </ul>
            </div>
            <div>
                <h2 className="font-medium text-xl mb-5">Quick Link</h2>
                <ul>
                    <li className="text-base mb-4"><Link href={""}>Privacy Policy</Link></li>
                    <li className="text-base mb-4"><Link href={""}>Terms Of Use</Link></li>
                    <li className="text-base mb-4"><Link href={""}>FAQ</Link></li>
                    <li className="text-base"><Link href={""}>Contact</Link></li>
                </ul>
            </div>
        </footer>
    )
}