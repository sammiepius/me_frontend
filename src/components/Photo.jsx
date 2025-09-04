import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// import { Plus } from "lucide-react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([
    { id: 1, src: '/images/person.jpg', alt: 'Person' },
    { id: 2, src: '/images/mountain.jpg', alt: 'Mountain' },
    { id: 3, src: '/images/sunset.jpg', alt: 'Sunset' },
    { id: 4, src: '/images/dog.jpg', alt: 'Dog' },
    { id: 5, src: '/images/sunflower.jpg', alt: 'Sunflower' },
    { id: 6, src: '/images/city.jpg', alt: 'City' },
  ]);
  const navigate = useNavigate();
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhoto = {
        id: photos.length + 1,
        src: URL.createObjectURL(file),
        alt: file.name,
      };
      setPhotos([...photos, newPhoto]);
    }
  };

  return (
    <>
      {' '}
      <FaArrowLeft
        style={{
          color: 'black',
          marginTop: '10px',
          width: '100px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(-1)}
      />
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">My Photos</h2>
          <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition">
            {/* <Plus size={18} /> */}
            + Upload Photo
            <input type="file" className="hidden" onChange={handleUpload} />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
