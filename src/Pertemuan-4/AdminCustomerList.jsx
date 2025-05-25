import React, { useState } from "react";
import customerData from "./customer.json";

export default function AdminCustomerList() {
  const [customers, setCustomers] = useState(customerData);
  const [filter, setFilter] = useState({
    searchTerm: "",
    gender: "",
    membership: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleEdit = (id) => {
    alert(`Edit pelanggan dengan ID ${id} (fitur belum diimplementasi)`);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus pelanggan ini?");
    if (confirmDelete) {
      const updated = customers.filter((cust) => cust.id !== id);
      setCustomers(updated);
    }
  };

  const handleAddCustomer = () => {
    const newCustomer = {
      id: Date.now(),
      name: "Pelanggan Baru",
      email: "baru@email.com",
      gender: "Laki-laki",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      details: {
        membership: "Bronze",
        totalVisits: 0,
        favoriteBarber: "Aldi",
      },
    };
    setCustomers([newCustomer, ...customers]);
  };

  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      cust.email.toLowerCase().includes(filter.searchTerm.toLowerCase());
    const matchesGender = filter.gender ? cust.gender === filter.gender : true;
    const matchesMembership = filter.membership
      ? cust.details.membership === filter.membership
      : true;
    return matchesSearch && matchesGender && matchesMembership;
  });

  const allMemberships = [...new Set(customers.map((c) => c.details.membership))];

  return (
    <div className="p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Pelanggan Barbershop</h1>
        <button
          onClick={handleAddCustomer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Tambah Pelanggan
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 w-full"> 
        <input
          type="text"
          name="searchTerm"
          placeholder="Cari nama atau email..."
          className="w-full p-2 border rounded"
          value={filter.searchTerm}
          onChange={handleChange}
        />
        <select
          name="gender"
          value={filter.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Semua Gender</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <select
          name="membership"
          value={filter.membership}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Semua Membership</option>
          {allMemberships.map((m, idx) => (
            <option key={idx} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Tabel Pelanggan */}
      <table className="w-full table-auto border border-gray-300 shadow-md rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border text-left">Foto</th>
            <th className="p-3 border text-left">Nama</th>
            <th className="p-3 border text-left">Email</th>
            <th className="p-3 border text-left">Gender</th>
            <th className="p-3 border text-left">Membership</th>
            <th className="p-3 border text-left">Total Kunjungan</th>
            <th className="p-3 border text-left">Barber Favorit</th>
            <th className="p-3 border text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((cust) => (
            <tr key={cust.id} className="hover:bg-gray-50">
              <td className="p-3 border">
                <img
                  src={cust.image}
                  alt={cust.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="p-3 border">{cust.name}</td>
              <td className="p-3 border">{cust.email}</td>
              <td className="p-3 border">{cust.gender}</td>
              <td className="p-3 border">{cust.details.membership}</td>
              <td className="p-3 border text-center">{cust.details.totalVisits}</td>
              <td className="p-3 border">{cust.details.favoriteBarber}</td>
              <td className="p-3 border text-center space-x-2">
                <button
                  onClick={() => handleEdit(cust.id)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cust.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
