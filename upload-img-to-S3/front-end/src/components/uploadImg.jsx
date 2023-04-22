import React, { useState } from "react";
import useMutation from "../hooks/useMutation";
import useQuery from "../hooks/useQuery";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const URL = "/images";

const ErrorText = ({ children, ...props }) => (
  <p className="text-2xl text-red-500">{children}</p>
);

const UploadImg = () => {
  const [refetch, setRefetch] = useState(0);
  const {
    mutate: uploadImage,
    isLoading: uploading,
    error: uploadError,
  } = useMutation({ url: URL });

  const {
    data: imageUrls = [],
    isLoading: imagesLoading,
    error: fetchError,
  } = useQuery(URL, refetch);

  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!validFileTypes.find((type) => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    }

    const form = new FormData();
    form.append("image", file);

    await uploadImage(form);
    setTimeout(() => {
      setRefetch((s) => s + 1);
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-8">
      <i class="ri-file-upload-fill text-[8rem] text-red-400 animate-pulse"></i>
      <h1 className="text-3xl text-center">Upload photo here</h1>
      </div>
      <div className="button flex justify-center flex-col mt-5 items-center">
        <div>
          <input
            id="imgInput"
            className="hidden"
            onChange={handleUpload}
            type="file"
          />
          <label
            htmlFor="imgInput"
            className="py-2 text-xl rounded-md px-3 bg-red-500 hover:bg-red-600 font-semibold cursor-pointer"
            isLoading={uploading}
          >
            Upload
          </label>
        </div>
        <div>{error && <ErrorText>{error}</ErrorText>}</div>
        <div>{uploadError && <ErrorText>{uploadError}</ErrorText>}</div>
      </div>

      <div className="post mt-6 mb-12">
        <h2 className="text-left text-3xl text-red-400 pl-10 sm:pl-2">Posts</h2>
        <hr className="border-1 border-white" />
        <div className="contain flex justify-center items-center gap-3 mt-4 px-4 flex-wrap lg:flex-wrap md:flex-wrap sm:flex-wrap">

          {imageUrls?.length > 0 &&
            imageUrls.map((url) => (
              <img className="rounded-sm w-96 h-auto hover:animate-pulse" src={url} alt="Image" key={url} />
            ))}

        </div>
      </div>
    </div>
  );
};

export default UploadImg;
