import React, { useState } from 'react';

const PhotoUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (event:any) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setSelectedImage(URL.createObjectURL(file));
  //   }
  // };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold mb-4">사진 추가하기</h2>
      <div className="mb-4">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="max-w-xs mx-auto rounded-md shadow-lg"
          />
        ) : (
          <div className="bg-gray-100 w-32 h-32 flex justify-center items-center rounded-md">
            <span className="text-gray-500">사진 없음</span>
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        // onChange={handleImageChange}
        className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer"
      />
    </div>
  );
};

export default PhotoUploadForm;