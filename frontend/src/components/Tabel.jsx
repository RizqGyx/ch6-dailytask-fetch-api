import React from "react";

const Tabel = ({ cars, editCar, deleteCar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>
              <button onClick={() => editCar(car)}>Edit</button>
              <button onClick={() => deleteCar(car.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabel;
