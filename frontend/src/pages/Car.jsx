import React, { useState } from "react";
import Tabel from "../components/Tabel";
import Modal from "../components/Modal";
import Form from "../components/Form";

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const addCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  const editCar = (editedCar) => {
    const updatedCars = cars.map((car) =>
      car.id === editedCar.id ? editedCar : car
    );
    setCars(updatedCars);
    setSelectedCar(null);
  };

  const deleteCar = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  const openEditModal = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const openAddModal = () => {
    setSelectedCar(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openAddModal}>Tambah Data Baru</button>
      <Tabel cars={cars} editCar={openEditModal} deleteCar={deleteCar} />
      {showModal && (
        <Modal closeModal={closeModal}>
          <Form
            selectedCar={selectedCar}
            addCar={addCar}
            editCar={editCar}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
