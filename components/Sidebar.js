import {
  BookmarkIcon,
  ChevronDownIcon,
  ClockIcon,
  PlayIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div style={{ flex: 1 }} className="p-2 space-y-5 overflow-hidden">
      <div className="p-2 space-y-5">
        <div className="flex items-center">
          <img
            className="rounded-full h-10"
            src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-1/p160x160/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=Fln_u_EyUfsAX_RWCLR&_nc_ht=scontent.flhe11-1.fna&oh=e00379d5e88b0d22076d7860e9705e21&oe=615DAACE"
          />
          <p className="font-bold text-lg ml-2">Shayan Shuaib Siddiqui</p>
        </div>
        <div className="sidebar_Icon">
          <UserIcon className="h-8" />
          <p className="font-semibold text-lg ml-2">Friends</p>
        </div>
        <div className="sidebar_Icon">
          <ClockIcon className="h-8" />
          <p className="font-semibold text-lg ml-2">Memories</p>
        </div>
        <div className="sidebar_Icon">
          <UserGroupIcon className="h-8" />
          <p className="font-semibold text-lg ml-2">Groups</p>
        </div>
        <div className="sidebar_Icon">
          <PlayIcon className="h-8" />
          <p className="font-semibold text-lg ml-2">Watch</p>
        </div>
        <div className="sidebar_Icon">
          <BookmarkIcon className="h-8" />
          <p className="font-semibold text-lg ml-2">Saved</p>
        </div>
        <div className="sidebar_Icon">
          <ChevronDownIcon className="h-8 bg-gray-300 rounded-full p-1" />
          <p className="font-semibold text-lg ml-2">See More</p>
        </div>
      </div>
      <hr className="ml-4" />
      <div>
        <div className="flex items-center justify-between px-2 mt-2">
          <p className="font-bold text-lg">Your Shortcuts</p>
          <button className=" text-blue-500 cursor-pointer font-semibold">
            Edit
          </button>
        </div>
        <div className="space-y-3 pl-2 ">
          <div className="flex items-center mt-2 hover:bg-gray-300 rounded-lg px-2 py-1 cursor-pointer">
            <img
              className="h-10 rounded-xl"
              src="https://pngimg.com/uploads/mario/mario_PNG125.png"
            />
            <p className="font-semibold text-lg ml-2">The Official Cartoon</p>
          </div>
          <div className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 cursor-pointer">
            <img
              className="h-10 rounded-xl"
              src="https://pngimg.com/uploads/mario/mario_PNG125.png"
            />
            <p className="font-semibold text-lg ml-2">The Official Cartoon</p>
          </div>
          <div className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 cursor-pointer">
            <img
              className="h-10 rounded-xl"
              src="https://pngimg.com/uploads/mario/mario_PNG125.png"
            />
            <p className="font-semibold text-lg ml-2">The Official Cartoon</p>
          </div>
          <div className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 cursor-pointer">
            <img
              className="h-10 rounded-xl"
              src="https://pngimg.com/uploads/mario/mario_PNG125.png"
            />
            <p className="font-semibold text-lg ml-2">The Official Cartoon</p>
          </div>
          <div className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 cursor-pointer">
            <img
              className="h-10 rounded-xl"
              src="https://pngimg.com/uploads/mario/mario_PNG125.png"
            />
            <p className="font-semibold text-lg ml-2">The Official Cartoon</p>
          </div>
        </div>
      </div>
      {/* sidebar footer */}
      <div>
        <p>Privacy.Term.Advertising.Cookies. Facebook 2021</p>
      </div>
    </div>
  );
}

export default Sidebar;
