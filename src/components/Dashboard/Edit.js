import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [nama, setNama] = useState(selectedEmployee.nama);
  const [npm, setNpm] = useState(selectedEmployee.npm);
  const [email, setEmail] = useState(selectedEmployee.email);
  

  const handleUpdate = e => {
    e.preventDefault();

    if (!nama || !npm || !email ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      nama,
      npm,
      email,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.nama} ${employee.npm}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Data Mahasiswa</h1>
        <label htmlFor="nama">Nama </label>
        <input
          id="nama"
          type="text"
          name="nama"
          value={nama}
          onChange={e => setNama(e.target.value)}
        />
        <label htmlFor="npm">NPM</label>
        <input
          id="npm"
          type="text"
          name="npm"
          value={npm}
          onChange={e => setNpm(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

  
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
