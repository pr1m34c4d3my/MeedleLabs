export default function ProfileCard(){
    return(
            <div className="container px-3 py-3 w-3/12 bg-white rounded">
                <img src="/profile-bg.png" className="w-full rounded"/>
                    <div className="flex">
                        <img src="/profile-pic.png" className="flex pl-4 -mt-6 w-24 h-20"/>
                            <div className="relative mx-4">
                                <h1 className="font-bold mt-1 -mb-2">Anna Anne</h1>
                                <h2 className="font-regular">Designer, Programmer</h2>
                                <button className="flex bg-blue-700 px-2 py-1 text-xs rounded-full text-white">Open For Collaboration</button>
                            </div>
                    </div>
                    <div className="flex items-center mt-10 pb-10 text-center border-b-2 border-gray">
                        <div className="ml-8">
                            <h1 className="font-black text-2xl">20</h1>
                            <h2 className="font-semibold text-xs">NFTs Held</h2>
                        </div>
                        <div className="ml-12">
                            <h1 className="font-black text-2xl">54K</h1>
                            <h2 className="font-semibold text-xs">Connections</h2>
                        </div>
                        <div className="ml-10">
                            <h1 className="font-black text-2xl">400</h1>
                            <h2 className="font-semibold text-xs">Contributions</h2>
                        </div>
                    </div>
                    <div className="container">
                        <h2 className="font-semibold text-sm pb-2 pt-8">Top Donations</h2>
                            <div className="flex bg-gray-200 rounded w-full items-center">
                                <img src="/top-donation.png" className="flex w-28 rounded" />
                                    <div className="block ml-4">
                                        <h1 className="font-bold text-sm">WWF Foundation</h1>
                                        <h2 className="font-reguler text-xs">Save the tigers charity.</h2>
                                    </div>
                                <img src="/eth.png" className="flex ml-12 w-2" />
                                <h1 className="font-black ml-1 text-xl text-[#0061FF]">4</h1>
                            </div>
                    </div>
                    <div className="container">
                        <h2 className="font-semibold text-sm pb-2 pt-8">Skills</h2>
                            <div className="container">
                                <ul className="relative">
                                    <li className="bg-gray-200 max-w-max px-6 rounded-full items-center"><a href="">UI/UX</a></li>
                                    <li className="bg-gray-200 max-w-max px-6 rounded-full items-center"><a href="">Fullstack Developer</a></li>
                                    <li className="bg-gray-200 max-w-max px-6 rounded-full items-center"><a href="">NFTs Development</a></li>
                                    <li className="bg-gray-200 max-w-max px-6 rounded-full items-center"><a href="">Discord Bots</a></li>
                                    <li className="bg-gray-200 max-w-max px-6 rounded-full items-center"><a href="">+5 Other Skills</a></li>
                                </ul>
                            </div>    
                    </div>
                    <div className="container">
                        <h2 className="font-semibold text-sm pb-2 pt-8">Portofolios</h2>
                    </div>
            </div>
    );
}