import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import DragAndDrop from '../components/DragAndDrop';
import InputWithIcon from '../components/ui/forms/Form';
import ConfirmationDialogueBox from '../components/ui/status/Confirmation';
import ErrorStatus from'../components/ui/status/Error';
const users = [
  {
    id: 1,
    name: 'ProGate',
    email: 'admin@admin.com',
    country: '🇺🇸',
    paymentMethod: 'mastercard',
    status: 'active',
    type: 'New',
    registered: 'Jan 10, 2023',
    lastLogin: '10 seconds ago',
  },
  {
    id: 2,
    name: 'Manish',
    email: 'manish0166@gmail.com',
    country: '🇧🇷',
    paymentMethod: 'visa',
    status: 'inactive',
    type: 'Recurring',
    registered: 'Jan 10, 2023',
    lastLogin: '5 minutes ago',
  },
  {
    id: 3,
    name: 'Rohit kushwaha',
    email: 'rohitkushwaha123455@gmail.com',
    country: '🇮🇳',
    paymentMethod: 'stripe',
    status: 'pending',
    type: 'New',
    registered: 'Jan 10, 2023',
    lastLogin: '1 hour ago',
  },
];

const statusColors = {
  active: 'bg-green-500',
  inactive: 'bg-red-500',
  pending: 'bg-yellow-500',
};

export default function UserList() {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">


      <div className="flex justify-between items-center mb-4">
        <div className=''>
          <label htmlFor="entries" className="mr-3">Show</label>
          <select id="entries" className="p-1 border w-12 rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>

          </select>
          <span className="ml-2">entries</span>
        </div>
        <div className="relative">

          <HiOutlineMail className="absolute left-4 top-3 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" p-3 pl-14 border border-gray-600 rounded-2xl bg-gray-900 text-white placeholder-gray-400 shadow-sm focus:ring-4 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-gray-400"
          />
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg tab">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">User</th>
              <th>Email-ID</th>
              <th>Country</th>
              <th>Payment Method</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4 flex items-center space-x-3">
                  <span
                    className={`w-3 h-3 rounded-full ${statusColors[user.status]}`}
                  ></span>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">
                      {user.type} | Registered: {user.registered}
                    </p>
                  </div>
                </td>
                <td>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {user.email}
                  </a>
                </td>
                <td>{user.country}</td>
                <td>
                  {user.paymentMethod === 'mastercard' && '💳'}
                  {user.paymentMethod === 'visa' && '💳'}
                  {user.paymentMethod === 'stripe' && '💰'}
                </td>
                <td>
                  <span className="text-sm text-gray-500">Last login</span>
                  <br />
                  {user.lastLogin}
                </td>
                <td>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <HiDotsVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DragAndDrop />
    </div>
  );
}