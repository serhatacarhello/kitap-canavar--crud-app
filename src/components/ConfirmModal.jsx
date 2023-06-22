import React from 'react'
const ConfirmModal = ({setShowConfirmModal, handleDelete,bookId}) => {
  return (
    <div  className='modal z-1 bg-secondary position-fixed top-0 start-0 w-100 h-100 d-grid align-items-center shadow-sm' >
        <div className='modal-inner  mx-auto bg-white w-25 h-25 p-4  rounded d-flex flex-column gap-1 '>
        <h4 className='text-center'>Silmek istiyormusunuz?</h4>
        <button
        className='btn btn-warning' onClick={()=> setShowConfirmModal(false)} >Geri Dön</button><button
        className='btn btn-danger'
       onClick={()=>{ handleDelete(bookId);
        setShowConfirmModal(false)}
       } >Sil</button>
      </div>
    </div>
  )
}

export default ConfirmModal