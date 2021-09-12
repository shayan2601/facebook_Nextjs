import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center mt-40">
      <img
        className=" h-32 w-32"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/100px-Facebook_f_logo_%282021%29.svg.png"
      />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png" />
      <button
        className="mt-10 font-semibold uppercase bg-gray-200 p-2  rounded-md"
        onClick={() => signIn()}
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;
