import { useState, useEffect } from "react";
import Button from "../ui/Button";
import InputGroup from "../ui/InputGroup";
import axios from "axios";
// import { useAuth } from "../../contexts/AuthProvider";

const EditProfile = () => {
  // const [auth, setAuth] = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    profilePic: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.mobile,
      address: formData.address,
      gender: formData.gender,
      profilePic: formData.profilePic,
    };

    try {
      const response = await axios.post(
        "https://kachchi-palace-api-v1.onrender.com/api/v2/customer/profile-update",
        data,
        // {
        //   headers: {
        //     Authorization: `Bearer ${auth.token}`,
        //   },
        // }
      );
      console.log("Form data submitted:", response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error submitting form data:", error);
      setLoading(false);
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
            <div className="col-span-1">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium dark:text-white"
                for="file_input"
              >
                Upload Profile Picture
              </label>
              <input
                classNmae="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-48 mt-10">
            <Button
              text="Update"
              variant="basic"
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
