import { useEffect, useState } from 'react';
import axios from 'axios';

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const apiUrl = '';

    axios.get('/v2/customer/profile')
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching profile data:', error);
      });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">My profile</h2>
      </div>
      <div className="bg-white p-8 grid grid-cols-3 gap-3 min-h-[300px]">
        {profileData ? (
          <>
            <div className="p-2">
              <h5>Name</h5>
              <p>{`${profileData.first_name} ${profileData.last_name}`}</p>
            </div>
            <div className="p-2">
              <h5>Email</h5>
              <p>{profileData.email}</p>
            </div>
            <div className="p-2">
              <h5>Mobile</h5>
              <p>{profileData.mobile}</p>
            </div>
            <div className="p-2">
              <h5>Address</h5>
              <p>{profileData.address}</p>
            </div>
            <div className="p-2">
              <h5>Gender</h5>
              <p>{profileData.gender}</p>
            </div>
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
