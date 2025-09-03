import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlayCircle } from 'react-icons/fa';

export default function Music() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const albums = [
    {
      id: 'Atomic Habits',
      title: 'Back in Black',
      artist: 'Abaga',
      cover: '',
    },
    {
      id: '2',
      title: '25',
      artist: 'Adele',
      cover: '',
    },
    {
      id: '3',
      title: 'Random access',
      artist: 'Daft Punk',
      cover: '',
    },
  ];

  return (
    <div className="">
      <FaArrowLeft
        style={{
          color: 'black',
          marginTop: '10px',
          width: '100px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(-1)}
      />
      <div className="container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">My Music</h2>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-200 transition">
            + Upload Music
          </button>
        </div>

        {/* Book List */}
        <div className="grid grid-cols-3 gap-4">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center hover:shadow-lg transition">
              <img
                src={album.cover}
                alt={album.title}
                className="w-28 h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                {album.title}
              </h3>
              <p className="text-xs text-gray-600 text-center">
                {album.artist}
              </p>
              <FaPlayCircle />
            </div>
          ))}
        </div>
      </div>
      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Upload New Book
            </h3>
            <form >
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Book Title"
                  // value={newBook.title}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  // value={newBook.author}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="cover"
                  placeholder="Cover URL"
                  // value={newBook.cover}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  // onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
