export default function ProfileCard(){
    return(
        <card className="flex">
            <div className="px-3 py-3 w-4/12 bg-white rounded">
                <img src="/profile-bg.png" className="w-full rounded"/>
                    <div className="flex">
                        <img src="/profile-pic.png" className="flex pl-4 -mt-8 w-3/12"/>
                            <div className="relative mx-6">
                                <h1 className="font-bold mt-3 -mb-2">Anna Anne</h1>
                                <h2 className="font-regular mb-1">Designer, Programmer</h2>
                                <button className="bg-blue-700 px-2  rounded-full text-white">Open For Collaboration</button>
                            </div>
                    </div>
                    <div className="flex items-center mt-10 pb-10 text-center border-b-2 border-gray">
                        <div className="items-center ml-14">
                            <h1 className="font-black text-3xl">20</h1>
                            <h2 className="font-bold">NFTs Held</h2>
                        </div>
                        <div className="items-center ml-14">
                            <h1 className="font-black text-3xl">54K</h1>
                            <h2 className="font-bold">Connections</h2>
                        </div>
                        <div className="items-center ml-14">
                            <h1 className="font-black text-3xl">400</h1>
                            <h2 className="font-bold">Contributions</h2>
                        </div>
                    </div>
                
            </div>
        </card>
    );
}