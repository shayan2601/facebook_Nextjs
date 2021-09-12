import Story from "./Story";
import stories from "../stories";
import {
  ChevronRightIcon,
  EmojiHappyIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Posts from "./Posts";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ModalData from "./ModalData";
import db from "../firebase";

function Feed() {
  const [session] = useSession();
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative flex  max-w-2xl  scrollbar-hide overflow-x-auto">
        <div className="flex items-center gap-3 relative">
          {stories.map(({ image, name }) => (
            <Story image={image} name={name} />
          ))}
          <ChevronRightIcon
            style={{ left: 630, top: 86 }}
            className="w-10 rounded-full shadow-sm absolute bg-gray-200 z-40 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col mx-auto bg-gray-200 rounded-md shadow-md px-8 py-2 mt-7">
        <div className="flex items-center">
          <div>
            <img
              className="rounded-full h-14 object-cover"
              src={session?.user.image}
            />
          </div>
          <input
            onClick={() => setOpen(true)}
            className="ml-5 flex-grow px-4 rounded-full py-3 outline-none focus-within:shadow-lg"
            placeholder={`What's on your mind ${session?.user.name}`}
          />
        </div>
        <Modal open={open} onClose={() => setOpen(false)} center>
          <ModalData />
        </Modal>
        <hr className=" text-black my-1" />
        <div className="flex items-center justify-between px-12">
          <div className="flex hover:bg-gray-300 rounded-md px-2">
            <VideoCameraIcon className=" text-red-600 h-10" />
            <button className="font-semibold">Live Video</button>
          </div>
          <div className="flex items-center hover:bg-gray-300 rounded-md px-2">
            <PhotographIcon className=" text-green-500 h-10" />
            <button className=" font-semibold"> Photo/Video</button>

            {/* <button className="font-semibold">Photo/Video</button> */}
          </div>
          <div className="flex hover:bg-gray-300 rounded-md px-2">
            <EmojiHappyIcon className=" text-yellow-500 h-10" />
            <button className="font-semibold">Feeling/Activity</button>
          </div>
        </div>
      </div>
      {/* Posts */}
      <div className="mt-7">
        {posts.map(({ id, post }) => (
          <Posts
            key={id}
            id={id}
            image={post?.image}
            caption={post?.caption}
            timestamp={post?.timestamp}
            sessionImage={post?.sessionImage}
            sessionName={post?.sessionName}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
