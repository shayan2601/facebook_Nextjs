import {
  ChatAltIcon,
  DotsHorizontalIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";

function Posts({ caption, image, timestamp, sessionName, sessionImage }) {
  return (
    <div className="bg-gray-200 rounded-md p-4 mt-4">
      {/* post header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img className="h-10 rounded-full" src={sessionImage} />
          <p className="font-bold">{sessionName}</p>
        </div>
        <DotsHorizontalIcon className="h-10 hover:bg-gray-100 rounded-full cursor-pointer p-2" />
      </div>
      {/* post caption */}
      <p className=" font-semibold text-lg">{caption}</p>
      {/* post image */}
      <div>
        <img
          style={{ height: "500px", width: "850px" }}
          className="w-full h-xl mx-auto"
          src={image}
        />
      </div>
      <hr />
      <div className="flex items-center justify-between px-10 mt-6">
        <div className="flex items-center hover:bg-gray-300 rounded-md px-3 py-2 space-x-1">
          <ThumbUpIcon className="h-6 " />
          <button className="font-semibold">Like</button>
        </div>
        <div className="flex items-center hover:bg-gray-300 rounded-md px-3 py-2 space-x-1">
          <ChatAltIcon className="h-6 " />
          <button className="font-semibold">Comment</button>
        </div>
        <div className="flex items-center hover:bg-gray-300 rounded-md px-3 py-2 space-x-1">
          <ShareIcon className="h-6 " />
          <button className="font-semibold">Share</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Posts;
