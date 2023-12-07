import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [nama, setNama] = useState('');
  const [npm, setNpm] = useState('');
  const [email, setEmail] = useState('');


  const handleAdd = e => {
    e.preventDefault();

    if (!nama  ||!npm || !email ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      nama,
      npm,
      email,
   

    };

    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${nama} ${npm}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Tambah Mahasiswa</h1>
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
          <input type="submit" value="Tambah" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
