import React, { useEffect, useState } from "react";

const Card = ({ book, handleModal, handleIsRead, handleEditModal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const generateRandomImage = async () => {
      const response = await fetch("https://picsum.photos/200/300");
      const imageUrl = response.url;
      setImageUrl(imageUrl);
    };

    generateRandomImage();
  }, []);

  return (
    <div className="card mb-4  shadow" style={{ width: "18rem" }}>
      <img className="card-img-top m-auto mt-1" style={{ width: "15rem"}} src={imageUrl} alt="bookImage" />
      <div className="card-body ">
        <h5
          className="card-title text-wrap text-break"
          style={{
            textDecoration: book.isRead ? "line-through" : "none",
            color: book.isRead ? "red" : "blue",
          }}
        >
          {book.title}
        </h5>
        <p className="card-text">{book.date}</p>
        <div className="col-md-6 btn-group p-3">
          <button
            className="btn btn-danger z-0"
            onClick={() => handleModal(book.id)}
          >
            Sil
          </button>
          <button
            className="btn btn-warning z-0"
            onClick={() => handleEditModal(book)}
          >
            Düzenle
          </button>
          <button
            className="btn btn-success z-0"
            onClick={() => handleIsRead(book)}
          >
            {book.isRead ? "Okundu" : "Okunmadı"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
