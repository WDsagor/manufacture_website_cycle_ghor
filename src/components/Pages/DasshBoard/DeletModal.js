import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeletModal = ({deleteOrder, refetch}) => {
  const deleteItem = id =>{

    if(id){
      (async () => {
        const { data } = await axios.delete(`https://morning-headland-71828.herokuapp.com/orders/${id}`);
        
        if(!data.success) return toast.error(data.error, {
          position: toast.POSITION.TOP_CENTER
        })
    
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER
          
        })
        refetch();
        
      })()
    }
  } 

    return (     
      
      <div>
        <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label htmlFor="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">You want to delete <span className=' text-primary'>{deleteOrder.itemName} ?</span></h3>
          <p class="py-4">If you want to delete click to comfirm or you can't delete click on cross ..</p>
          <div class="modal-action">
            <label htmlForr="delete-modal" class="btn btn-sm btn-error text-white" onClick={()=> deleteItem(deleteOrder._id)}> Confirm </label>
          </div>
        </div>
      </div>
      </div>
      );
};

export default DeletModal;