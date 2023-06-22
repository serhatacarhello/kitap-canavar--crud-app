import { useState } from "react";
import Card from "./components/Card";
import { toast } from "react-toastify";
import ConfirmModal from "./components/ConfirmModal";
import EditModal from "./components/EditModal";
import backgroundImage from './assets/Monsters-University-PNG-Picture.png'

function App() {
  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [willDeleteBookId, setWillDeleteBookId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [willEditBookId, setWillEditBookId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: new Date().getTime(),
      title: text,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    setBooks([...books, newBook]);
    setText("");
    toast.success("Kitap Eklendi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function handleIsRead(book) {
    const updatedBook = { ...book, isRead: !book.isRead };
    let cloned_books = [...books];
    const indexOfBook = cloned_books.findIndex((item) => item.id === book.id);
    cloned_books.splice(indexOfBook, 1, updatedBook);
    setBooks(cloned_books);
  }

  const handleModal = (id) => {
    setShowConfirmModal(true);
    setWillDeleteBookId(id);
  };

  const handleEdit = (updatedBook) => {
    let cloned_books = [...books];
    const index = cloned_books.findIndex((book) => book.id === updatedBook.id);

    if (index !== -1) {
      cloned_books.splice(index, 1, updatedBook);
      setBooks(cloned_books);
      toast.info("Kitap güncellendi!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleEditModal = (book) => {
    setShowEditModal(true);
    setWillEditBookId(book.id);
  };

  function handleDelete(id) {
    let cloned_books = [...books];
    const filtered_books = cloned_books.filter((book) => book.id !== id);
    setBooks(filtered_books);

    toast.error("Kitap Silindi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div  className="App  p-3 d-flex align-items-center justify-content-center flex-column">
      <h1 className="fs-1 bg-danger text-white text-uppercase d-inline-flex px-5 py-2 mb-0 rounded rounded-2">
        KİTAP CANAVARI
      </h1>
      <div className="w-50 mb-2  px-3 mt-0">
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center justify-content-center   px-3 mb-2 mt-0"
        >
          <input
            className="form-control p-3"
            type="text"
            name="text"
            id="text"
            placeholder="Kitap ismi giriniz..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            required
          />
          <button className="btn btn-success  fs-3">Ekle</button>
        </form>
      </div>
      <div className="px-5">
        {books.length === 0 ? (
          <p className="p-2">Kitap listeniz henüz boş!</p>
        ) : (
          <h4 className="p-2">Kitaplarınız</h4>
        )}
      </div>
      <div className=" w-100 d-flex gap-3 align-items-center justify-content-center flex-wrap ">
        {books.map((book) => (
          <Card
            key={book.id}
            book={book}
            handleIsRead={handleIsRead}
            handleModal={handleModal}
            handleEditModal={handleEditModal}
          />
        ))}
      </div>

      {showConfirmModal && (
        <ConfirmModal
          setShowConfirmModal={setShowConfirmModal}
          handleDelete={handleDelete}
          bookId={willDeleteBookId}
        />
      )}
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          handleEdit={handleEdit}
          bookId={willEditBookId}
          books={books}
        />
      )}
    </div>
  );
}

export default App;
