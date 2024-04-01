import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    
  return (
    <div className='group mt-6 relative w-full shadow-sm border p-6 md:p-4 rounded-lg sm:w-[350px] scrollbar h-[370px] overflow-hidden'>
      <Link to={`/post/${post.slug}`}>
        <img src={post.image} alt="" className='md:h-[230px] h-[220px] w-full object-cover 
        group-hover:h-[200px] transition-all duration-300 z-20' />
      </Link>
      <div className='flex flex-col p-3 gap-2 '>
        <p className='text-xl font-medium capitalize font-sans'>{post.title}</p>
        <span className='font-bold font-sans text-sm'>{post.category}</span>
        <Link to={`/post/${post.slug}`} className='z-10 group-hover:bottom-0
        absolute bottom-[-200px] left-0 right-0 
        border border-green-600 text-green-600 
        hover:bg-green-600 hover:text-white transition-all 
        duration-300 text-center py-2 rounded-md !rounded-tl-none m-2
          '>Read article</Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired, // Use PropTypes.object to validate an object prop
};

export default PostCard;
