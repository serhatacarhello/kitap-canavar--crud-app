import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ handleEdit, bookId, setShowEditModal, books }) => {
  const [text, setText] = useState("");
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = books.find((book) => book.id === bookId);
    setBook(selectedBook);
    setText(selectedBook.title);
  }, [bookId, books]);

  const handleClick = () => {
    if (!text) {
      return toast.error("Geçerli bir değer giriniz");
    }

    // Güncellenmiş kitap nesnesini oluştur
    const updatedBook = {
      ...book,
      title: text,
      date: new Date().toLocaleString(),
    };

    // handleEdit fonksiyonunu çağır ve güncellenmiş kitap nesnesini geç
    handleEdit(updatedBook);

    // setShowEditModal fonksiyonunu çağırarak düzenleme modalını kapat
    setShowEditModal(false);
  };

  return (
    <div className="modal z-1 bg-secondary position-fixed top-0 start-0 w-100 h-100 d-grid align-items-center shadow-sm">
      <div className="modal-inner mx-auto bg-white w-25 h-50 p-4 rounded d-flex flex-column justify-content-center gap-1">
        <h4 className="text-center mb-4">Kitap ismini giriniz</h4>
        <input
          className="form-control p-2 shadow"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="d-flex justify-content-around align-content-center pt-5">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Geri Dön
          </button>
          <button className="btn btn-danger" onClick={handleClick}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

