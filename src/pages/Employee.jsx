const EmployeeDetailsPage = () => {
  const employee = {
    personalInfo: {
      image: 'https://images.pexels.com/photos/3451711/pexels-photo-3451711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260&h=750',
      name: 'Jane Smith',
      gender: 'Female',
      nidNumber: '987-654-321',
      email: 'jane@example.com',
      phone: '987-654-3210',
      bankAccount: '1234567890',
      dateOfBirth: 'January 15, 1985',
      address: '456 Kitchen Ave, Town',
    },
    employeeInfo: {
      employeeId: 'EMP1234',
      salary: '$50,000',
      healthStatus: true,
      position: 'Chef',
      insuranceStatus: true,
      joiningDate: 'June 10, 2022',
    },
    contactInfo: {
      email: 'jane@example.com',
      phone: '987-654-3210',
      address: '456 Kitchen Ave, Town',
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-4">
        Kachchi <span className="text-secondary">Palace</span>
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="employee-card">
          <img src={employee.personalInfo.image} alt={employee.personalInfo.name} className="employee-image w-32 h-32 rounded-full mb-4" />
          <section className="personal-info">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <hr className="border-b border-secondary mb-4" /> {/* Add margin below the divider */}
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Name:</strong> {employee.personalInfo.name}</p>
              <p><strong>Gender:</strong> {employee.personalInfo.gender}</p>
              <p><strong>NID Number:</strong> {employee.personalInfo.nidNumber}</p>
              <p><strong>Email:</strong> {employee.personalInfo.email}</p>
              <p><strong>Phone:</strong> {employee.personalInfo.phone}</p>
              <p><strong>Bank Account:</strong> {employee.personalInfo.bankAccount}</p>
              <p><strong>Date of Birth:</strong> {employee.personalInfo.dateOfBirth}</p>
              <p><strong>Address:</strong> {employee.personalInfo.address}</p>
            </div>
          </section>
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Employee Information</h2>
            <hr className="border-b border-secondary mb-4" /> {/* Add margin below the divider */}
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Employee ID:</strong> {employee.employeeInfo.employeeId}</p>
              <p><strong>Salary:</strong> {employee.employeeInfo.salary}</p>
              <p><strong>Health Status:</strong> {employee.employeeInfo.healthStatus ? 'Healthy' : 'Not Healthy'}</p>
              <p><strong>Position:</strong> {employee.employeeInfo.position}</p>
              <p><strong>Insurance Status:</strong> {employee.employeeInfo.insuranceStatus ? 'Insured' : 'Not Insured'}</p>
              <p><strong>Joining Date:</strong> {employee.employeeInfo.joiningDate}</p>
            </div>
          </section>
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <hr className="border-b border-secondary mb-4" /> {/* Add margin below the divider */}
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Email:</strong> {employee.contactInfo.email}</p>
              <p><strong>Phone:</strong> {employee.contactInfo.phone}</p>
              <p><strong>Address:</strong> {employee.contactInfo.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
