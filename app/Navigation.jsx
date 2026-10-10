import Link from "next/link";

export default function nav(){
    return (
        <header >
            <div >
                <nav>
                    <ul className="bg-gray-800 text-white flex gap-5  items-center p-4">
                        <li><Link href="/">Home</Link></li> {/*when use link tag so when i route to other page so page not refresh again*/} 
                        <li><a href="/about">About</a></li>
                        <li><a href="/about/contact">Contact</a></li>
                    </ul>                
                </nav>
            </div>
        </header>
    )
} // now import in layout.js and <Navigation/> inside body tag. 