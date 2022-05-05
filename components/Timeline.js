export default function Timeline() {
  return (
    <div className="w-6/12 pl-10">
      <div className="flex rounded bg-white px-4 py-10">
        <img src="/profile-pic.png" className="mr-10 h-20 w-24 pl-4" />
        <input
          className="mr-4 w-full rounded-[20px] bg-gray-100 px-8 font-semibold focus:border-[#0061FF]  focus:outline-none focus:ring-1 focus:ring-[#0061FF]"
          placeholder="Any Thoughts?"
        />
      </div>
    </div>
  )
}
