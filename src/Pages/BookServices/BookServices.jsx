import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const BookServices = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);
  
    const handleBookService = event => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const date = form.date.value;
          const email = form.email.value;
          const price = form.price.value;

          const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price

          }
          console.log(booking);

          fetch('https://car-doctor-server-amber-omega.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Booking Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          })

    }
    return (
        <>
      <h2 className="text-2x font-bold text-center">Check Out: {title}</h2>
      <form onSubmit={handleBookService} className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            defaultValue={user?.displayName}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            name="date"
            type="date"
            placeholder="Date"
            className="input input-bordered"
            />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="$"
            defaultValue={user?.email}
            className="input input-bordered"
            />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input
            name="price"
            type="text"
            defaultValue={price}
            className="input input-bordered"
            />
        </div>
      </div>
        <div className="form-control mt-6">          
          <input className="btn bg-[#FF3811] btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
    </>
    );
};

export default BookServices;