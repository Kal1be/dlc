import { Link } from "react-router-dom"
import CallAction from "../component/CallAction"
import { useEffect, useState } from "react"
import Postcard from "../component/PostCard"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// the responsive given by the react multi carousel 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


function Home() {
  const [post,setPost] = useState([])


  // the api call by the useEffect hooks 

  useEffect(()=>{

    const fetchPosts = async ()=>{
      const res = await fetch("api/post/getposts")
  const data = await res.json()

if(res.ok){
  setPost(data.posts)
}
    }

    fetchPosts()
  },[])

  // the return of the function 
  // the function return the carousel,
  return (
    <div className="max-w-7xl mx-auto w-full md:mt-6 mt-1 px-1  md:px-0 mb-10">

<Carousel
  swipeable={true}
  draggable={"tablet"}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-20-px"
   className="btn"
>
  <div className="w-full h-[300px] md:h-[550px] ">
    <img src="./Last.png" className="w-screen h-full" alt="" />
  </div>
  <div  className="w-full h-[300px] md:h-[550px] " >
    <img src="./abu1.jpeg" className="w-screen h-full" alt="" />
  </div>
  <div  className="w-full h-[300px] md:h-[550px] ">
    <img src="./abu-get.jpg" className="w-screen h-full" alt="" />
  </div>
</Carousel>
      <div className="max-w-3xl px-2 flex mt-12 w-full mx-auto mb-10 md:mx-4">
  <div>
  <h2 className="md:text-5xl  text-2xl font-bold mt-2 mb- text-green-600">Welcome to Distance Learning Center</h2>
        <p className="text-gray-500 my-4 text-lg">Distance Learning Center is a platform for online course for
           AHmadu Bello university,the platform are building for integrating
            the teaching of school online for everybody and anyone in the world who want to school in ABU.</p>
            <Link to='search'className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">View all posts</Link>
  </div>
      </div>
     
       <div className="bg-gray-100 dark:bg-slate-700">
       <CallAction/>
       </div>
       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      { post && post.length >0 && (
  <div className="flex flex-col gap-6">
    <h1 className="text-2xl font-semibold text-center">Recent Posts</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {post.map((pos)=>(
        <Postcard key={pos._id} post={pos}/>
      ))}
    </div>
    <Link to="/search" className="text-lg text-teal-600 text-center hover:underline">View all posts</Link>

  </div>
        )}
       </div>
    </div>   
  )
}

export default Home
