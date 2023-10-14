import { useState } from 'react';
import Button from '../ui/Button';
import InputGroup from '../ui/InputGroup';
import axios from 'axios';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
    };

    try {
      const response = await axios.post('https://kachchi-palace-api-v1.onrender.com/api/v2/customer/profile-update', data);
      console.log('Form data submitted:', response.data);
    } catch (error) {
      console.log('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Edit profile</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-3">
            <InputGroup
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              size="normal"
            />
            <InputGroup
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              size="normal"
            />
            <InputGroup
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              size="normal"
            />
            <InputGroup
              label="Mobile"
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              size="normal"
            />
            <InputGroup
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              size="normal"
            />
          </div>
          <div className="w-48 mt-10">
            <Button text="Update" variant="basic" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
