import Categories from '@components/Categories'
import Post from '@components/Post'
import Insertpost from '@components/Insertpost'
export default function Timeline() {
  return (
    <>
      <div className="container w-6/12 pl-10">
        <Insertpost />
        <Categories />
        <Post />
      </div>
    </>
  )
}
