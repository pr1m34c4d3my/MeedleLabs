export default function Timeline(){
    return(
        <div className="pl-10 w-6/12">
            <div className="flex px-4 py-10 bg-white rounded">
                <img src="/profile-pic.png" className="pl-4 mr-10 w-24 h-20" />
                <input className="rounded-[20px] focus:outline-none focus:border-[#0061FF] focus:ring-[#0061FF] focus:ring-1 bg-gray-100 px-8  w-full mr-4 font-semibold" placeholder="Any Thoughts?" />
            </div>
        </div>
    );
}