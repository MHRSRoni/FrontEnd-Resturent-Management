import map from "../assets/image/Screenshot 2023-10-27 215121.png"
import { useState } from 'react';

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [location, setLocation] = useState('');
  const [tableReservation, setTableReservation] = useState(false);
  const [reservationTime, setReservationTime] = useState(''); 
  const [pickupTime, setPickupTime] = useState('');

  const products = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    { id: 2, name: 'Product 3', price: 5, quantity: 1 },
    { id: 2, name: 'Product 4', price: 25, quantity: 5 },
    // Add more product data as needed
  ];

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="p-8">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="text-center">
          <img src="logo.png" alt="Restaurant Logo" className="w-24 mx-auto mb-4" />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {products.map((product) => (
            <div key={product.id} className="mb-2">
              <span className="mr-2">{product.name}</span>
              <span className="mr-2">Quantity: {product.quantity}</span>
              <span>Price: ${product.price * product.quantity}</span>
            </div>
          ))}
          <div className="text-xl font-semibold mt-4">Total: ${totalPrice}</div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
          <div className="mb-4 space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="delivery"
                checked={deliveryMethod === 'delivery'}
                onChange={() => setDeliveryMethod('delivery')}
                className="form-radio h-5 w-5 text-primary"
              />
              <span className="ml-2">Delivery</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="pickup"
                checked={deliveryMethod === 'pickup'}
                onChange={() => setDeliveryMethod('pickup')}
                className="form-radio h-5 w-5 text-primary"
              />
              <span className="ml-2">Pickup</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="dine-in"
                checked={deliveryMethod === 'dine-in'}
                onChange={() => setDeliveryMethod('dine-in')}
                className="form-radio h-5 w-5 text-primary"
              />
              <span className="ml-2">Dine In</span>
            </label>
          </div>

          {deliveryMethod === 'delivery' && (
            <>
              <div className="mb-4">
                <label className="block font-semibold">Delivery Time</label>
                <input
                  type="time"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="form-input w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold">Set Delivery Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-input w-full"
                />
              </div>
            </>
          )}

          {deliveryMethod === 'pickup' && (
            <div className="mb-4">
              <label className="block font-semibold">Pickup Time</label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="form-input w-full"
              />
            </div>
          )}

{deliveryMethod === 'dine-in' && (
            <>
              <div className="mb-4">
                <label className="block font-semibold">Reservation Time</label>
                <input
                  type="time"
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  className="form-input w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold">Table Reservation</label>
                <input
                  type="checkbox"
                  checked={tableReservation}
                  onChange={() => setTableReservation(!tableReservation)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="ml-2">Reserve a table</span>
              </div>
            </>
          )}

          {/* Map Section */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Map</h2>
          <img src={map} alt="Map" className="w-full rounded-lg" />
        </div>

        {/* Proceed to Payment Button */}
        <div className="mt-8">
          <button className="bg-primary text-white py-2 px-4 rounded-lg">
            Proceed to Payment
          </button>
        </div>
        </div>
      </div>
    </div>
  );

};

export default CheckoutPage;
