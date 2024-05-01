import React, { useState } from "react";

const Form = ({ selectedCar, addCar, editCar, closeModal }) => {
  const [formData, setFormData] = useState(selectedCar || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCar) {
      editCar(formData);
    } else {
      const newCar = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
      };
      addCar(newCar);
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama Mobil:</label>
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
        required
      />
      <label>Harga Sewa per Hari:</label>
      <input
        type="number"
        name="rentPerDay"
        value={formData.rentPerDay || ""}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {selectedCar ? "Simpan Perubahan" : "Tambah Mobil Baru"}
      </button>
    </form>
  );
};

export default Form;
