export default function Post() {
  return (
    <div className="container block pb-10">
      <div className="container max-h-max w-full items-center rounded-xl bg-white px-3 py-5 shadow-lg">
        <div className="flex pb-10">
          <a href="#">
            <img src="/post-pic.png" className=" w-24 px-3" />
          </a>
          <div className="block">
            <a href="#" className=" hover:text-gray-500">
              <h1 className="font-semibold">Jackie0219</h1>
            </a>
            <h2>Designer, Programmer</h2>
          </div>

          <div className="ml-64 flex items-center">
            <img src="/post-type.png" className="w-12 px-2" />
            <a href="#" className=" hover:text-gray-500">
              <h1 className="font-semibold">Thoughts</h1>
            </a>
          </div>
        </div>
        <div className="border-gray container border-b-2 pb-10">
          <div className="flex max-h-max w-full items-center rounded-xl  bg-gray-100 px-3 py-5">
            <p>
              How long do you think NFTs would last? The last time that the big
              bubble occured, we really had a tough time handling the situation
            </p>
          </div>
        </div>
        <div className="container pt-5">
          <div className="flex items-center text-sm">
            <div className="mr-6 flex items-center">
              <img src="/likes.png" className="mr-2 w-6" />
              <h1>
                <span className="font-semibold">180k</span> Likes
              </h1>
            </div>
            <div className="flex items-center">
              <img src="/comment.png" className="mr-1 w-6" />
              <h1>
                <span className="font-semibold">80k</span> Comments
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
