// import React from 'react';

// const books = [
//   {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
//   },
//   {
//     title: 'Rich Dad Poor Dad',
//     author: 'Robert Kiyosaki',
//     cover: 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg',
//   },
//   {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho',
//     cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
//   },
//   {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
//   },
//   {
//     title: 'Rich Dad Poor Dad',
//     author: 'Robert Kiyosaki',
//     cover: 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg',
//   },
//   {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho',
//     cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
//   },
// ];

// export default function MyBooks() {

//   return (
//     <div className="">
//       <div className="container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-gray-900">My Books</h2>
//           <button
//             onClick={() => setShowForm(!showForm)}
//             className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-200 transition">
//             + Upload Book
//           </button>
//         </div>

//         {/* Book List */}
//         <div className="grid grid-cols-3 gap-4">
//           {books.map((book, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center hover:shadow-lg transition">
//               <img
//                 src={book.cover}
//                 alt={book.title}
//                 className="w-28 h-40 object-cover rounded-md mb-3"
//               />
//               <h3 className="text-sm font-semibold text-gray-900 text-center">
//                 {book.title}
//               </h3>
//               <p className="text-xs text-gray-600 text-center">{book.author}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function MyBooks() {
  const [books, setBooks] = useState([
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      cover: 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg',
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({ title: '', author: '', cover: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author || !newBook.cover) return;
    setBooks((prev) => [...prev, newBook]);
    setNewBook({ title: '', author: '', cover: '' });
    setShowForm(false);
  };

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
          <h2 className="text-xl font-bold text-gray-900">My Books</h2>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-200 transition">
            + Upload Book
          </button>
        </div>

        {/* Book List */}
        <div className="grid grid-cols-3 gap-4">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center hover:shadow-lg transition">
              <img
                src={book.cover}
                alt={book.title}
                className="w-28 h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                {book.title}
              </h3>
              <p className="text-xs text-gray-600 text-center">{book.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Upload New Book
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Book Title"
                  value={newBook.title}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={newBook.author}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="cover"
                  placeholder="Cover URL"
                  value={newBook.cover}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
