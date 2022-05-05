export default function Categories() {
  return (
    <div className="container py-16">
      <div className="flex items-center justify-center gap-12 text-center text-2xl font-bold text-white ">
        <div className=" w-52 rounded-xl bg-nft bg-cover py-20 ">
          <a href="#">NFTs Hunt</a>
        </div>
        <div className=" w-52 rounded-xl bg-charities bg-cover py-20 ">
          <a href="#">Charities</a>
        </div>
        <div className=" w-52 rounded-xl bg-jobs bg-cover py-20">
          <a href="#">Jobs</a>
        </div>
      </div>
    </div>
  )
}
