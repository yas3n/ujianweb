import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>NPM</th>
            <th>Email</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.nama}</td>
                <td>{employee.npm}</td>
                <td>{employee.email}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Ubah
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Tidak ada Mahasiswa</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
