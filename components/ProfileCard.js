export default function ProfileCard() {
  return (
    <div className="container w-3/12 rounded bg-white px-3 py-3">
      <img src="/profile-bg.png" className="w-full rounded" />
      <div className="flex">
        <img src="/profile-pic.png" className="-mt-6 flex h-20 w-24 pl-4" />
        <div className="relative mx-4">
          <h1 className="mt-1 -mb-2 font-bold">Anna Anne</h1>
          <h2 className="font-regular">Designer, Programmer</h2>
          <button className="flex rounded-full bg-blue-700 px-2 py-1 text-xs text-white">
            Open For Collaboration
          </button>
        </div>
      </div>
      <div className="border-gray mt-10 flex items-center border-b-2 pb-10 text-center">
        <div className="ml-8">
          <h1 className="text-2xl font-black">20</h1>
          <h2 className="text-xs font-semibold">NFTs Held</h2>
        </div>
        <div className="ml-12">
          <h1 className="text-2xl font-black">54K</h1>

          <h2 className="text-xs font-semibold">Connections</h2>
        </div>
        <div className="ml-10">
          <h1 className="text-2xl font-black">400</h1>
          <h2 className="text-xs font-semibold">Contributions</h2>
        </div>
      </div>
      <div className="container">
        <h2 className="pb-2 pt-8 text-sm font-semibold">Top Donations</h2>
        <div className="flex w-full items-center rounded bg-gray-200">
          <img src="/top-donation.png" className="flex w-28 rounded" />
          <div className="ml-4 block">
            <h1 className="text-sm font-bold">WWF Foundation</h1>
            <h2 className="font-reguler text-xs">Save the tigers charity.</h2>
          </div>
          <img src="/eth.png" className="ml-12 flex w-2" />
          <h1 className="ml-1 text-xl font-black text-[#0061FF]">4</h1>
        </div>
      </div>
      <div className="container">
        <h2 className="pb-2 pt-8 text-sm font-semibold">Skills</h2>
        <div className="container">
          <ul className="relative">
            <li className="max-w-max items-center rounded-full bg-gray-200 px-6">
              <a href="">UI/UX</a>
            </li>
            <li className="max-w-max items-center rounded-full bg-gray-200 px-6">
              <a href="">Fullstack Developer</a>
            </li>
            <li className="max-w-max items-center rounded-full bg-gray-200 px-6">
              <a href="">NFTs Development</a>
            </li>
            <li className="max-w-max items-center rounded-full bg-gray-200 px-6">
              <a href="">Discord Bots</a>
            </li>
            <li className="max-w-max items-center rounded-full bg-gray-200 px-6">
              <a href="">+5 Other Skills</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h2 className="pb-2 pt-8 text-sm font-semibold">Portofolios</h2>
      </div>
    </div>
  )
}
