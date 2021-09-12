import { useState } from "react";
import db, { storage } from "../firebase";
import firebase from "firebase";
import { useSession } from "next-auth/client";

function ModalData() {
  const [file, setFile] = useState("");
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [viewImage, setViewImage] = useState("");
  //   console.log("Image is ", file);

  const [session] = useSession();

  const selectedFile = (e) => {
    const file = e.target.files[0];
    const base64 = convertBase64(file);
    console.log(base64);
    setViewImage(base64);

    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const convertBase64 = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setViewImage(fileReader.result);
    };
  };

  const closeModal = () => {
    setFile(null);
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((urls) => {
            console.log(urls);
            setUrl(urls);
          });
      }
    );

    db.collection("posts").add({
      caption: input,
      image: url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      sessionImage: session?.user.image,
      sessionName: session?.user.name,
      sessionEmail: session?.user.email,
    });

    setFile(null);
    setInput(null);
  };

  return (
    <>
      <h1 className="text-center text-xl font-semibold">New Post</h1>
      <hr />
      {file ? (
        <div className="px-40 py-44 flex flex-col items-center space-y-5">
          <div className="flex items-center gap-5">
            <img className="object-contain w-64" src={viewImage} alt="" />

            <label className="flex flex-col text-gray-500 italic font-semibold">
              Caption Here🡣
              <input
                className="p-2 bg-yellow-50 rounded-md outline-none focus-within:shadow-md"
                type="text"
                placeholder="Write a Caption.."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={closeModal}
              className="bg-gray-500 p-2 rounded-md text-white font-semibold mt-3 cursor-pointer hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 p-2 rounded-md text-white font-semibold mt-3 cursor-pointer hover:bg-blue-600"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center mt-16 px-40 py-28 space-y-6 md:py-40 md:px-56">
          <img
            className=" w-20 object-contain"
            src="https://camo.githubusercontent.com/09e55b5e6a65a3ba9e38ed4de0f96ddd8ad46ba5c57b3e94d05222e0f127402a/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67"
          />
          <p className="text-gray-500 text-xl">Drag Photos and videos here</p>
          <label className="custom-file-upload bg-blue-500 p-2 rounded-md text-white font-semibold mt-3 cursor-pointer hover:bg-blue-600 ">
            <input
              value={file}
              onChange={selectedFile}
              className="hidden"
              type="file"
            />
            Custom Upload
          </label>
        </div>
      )}
    </>
  );
}

export default ModalData;
