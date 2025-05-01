import { FaEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from 'react-icons/io5';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 pt-4 bg-base-200 pb-2">
        <div className="flex gap-3 items-center">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{new Date(author.published_date).toDateString()}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xl text-gray-600">
          <CiBookmark className="cursor-pointer" />
          <IoShareSocialOutline className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img src={thumbnail_url} alt="News" className="w-full object-cover rounded-lg " />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.length > 150 ? details.slice(0, 150) + '...' : details}
        <span className="text-orange-600 font-semibold cursor-pointer ml-1">Read More</span>
      </div>

      {/* Footer: Rating and Views */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-700 font-semibold ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
