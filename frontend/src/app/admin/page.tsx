"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface Player {
    _id?: string;
    name: string;
    university: string;
    category: "Batsman" | "Bowler" | "All-Rounder";
    price: number;
    inningsplayed: number;
    totalruns: number;
    wickets: number;
    ballsfaced: number;
    overballed: number;
    runsconceded: number;
    
}

const PlayerManagement: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [form, setForm] = useState<Player>({
        name: "",
        university: "",
        category: "Batsman",
        price: 0,
        inningsplayed: 0,
        totalruns: 0,
        wickets: 0,
        ballsfaced: 0,
        overballed: 0,
        runsconceded: 0,
    });
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchPlayers();
    }, []);

    const fetchPlayers = async () => {
        const res = await axios.get<Player[]>("http://localhost:5000/admin/get");
        setPlayers(res.data);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            await axios.put(`http://localhost:5000/admin/${editingId}`, form);
            setEditingId(null);
        } else {
            await axios.post("http://localhost:5000/admin/create", form);
        }
        fetchPlayers();
        setForm({
            name: "",
            university: "",
            category: "Batsman",
            price: 0,
            inningsplayed: 0,
            totalruns: 0,
            wickets: 0,
            ballsfaced: 0,
            overballed: 0,
            runsconceded: 0,
        });
    };

    const handleEdit = (player: Player) => {
        setForm(player);
        setEditingId(player._id || null);
    };

    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:5000/admin/${id}`);
        fetchPlayers();
    };

    return (
    <>
        <div>
            <h2 className="text-3xl mb-5 text-center text-blue-500">Player Management</h2>
           
            <form className="m-2" onSubmit={handleSubmit}>
                <h1 className="text-xl">Add players</h1>
        <div className="space-y-12">
        
        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name} 
                  onChange={handleChange} required
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="university" className="block text-sm/6 font-medium text-gray-900">
              University
              </label>
              <div className="mt-2">
                <input
                  id="university"
                  name="university"
                  type="text"
                  placeholder="University" value={form.university} onChange={handleChange} required
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
              Category
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="category"
                  name="category"
                  value={form.category} onChange={handleChange} 
                  required
                  autoComplete="category"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Batsman</option>
                  <option>Bowler</option>
                  <option>All-Rounder</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
              Value
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Value" value={form.price} onChange={handleChange} required
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="inningsplayed" className="block text-sm/6 font-medium text-gray-900">
              Innings played
              </label>
              <div className="mt-2">
                <input
                  id="inningsplayed"
                  name="inningsplayed"
                  type="number"
                  placeholder="Innings Played" value={form.inningsplayed} onChange={handleChange} required
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="totalruns" className="block text-sm/6 font-medium text-gray-900">
              Total Runs
              </label>
              <div className="mt-2">
                <input
                  id="totalruns"
                  name="totalruns"
                  type="number"
                  placeholder="Total Runs" value={form.totalruns} onChange={handleChange} required
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="wickets" className="block text-sm/6 font-medium text-gray-900">
              Wickets
              </label>
              <div className="mt-2">
                <input
                  id="wickets"
                  name="wickets"
                  type="number"
                  placeholder="Wickets" value={form.wickets} onChange={handleChange} required
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="ballsfaced" className="block text-sm/6 font-medium text-gray-900">
              Balls Faced
              </label>
              <div className="mt-2">
                <input
                  id="ballsfaced"
                  name="ballsfaced"
                  type="number"
                  placeholder="Balls Faced" value={form.ballsfaced} onChange={handleChange} required
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="overballed" className="block text-sm/6 font-medium text-gray-900">
              over Balled
              </label>
              <div className="mt-2">
                <input
                  id="overballed"
                  name="overballed"
                  type="number"
                  placeholder="Overs Bowled" value={form.overballed} onChange={handleChange} required
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="runsconceded" className="block text-sm/6 font-medium text-gray-900">
              Runs Conceded
              </label>
              <div className="mt-2">
                <input
                  id="runsconceded"
                  name="runsconceded"
                  type="number"
                  placeholder="Runs Conceded" value={form.runsconceded} onChange={handleChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {editingId ? "Update" : "Add"} Player
        </button>
      </div>
    </form>

    

            <h3 className="text-xl m-3">Players List</h3>

            <table className="table-auto w-full border-1 border-gray-500 mt-5">
                <thead className="border-1 border-gray-500">
                    <tr className="border-1 border-gray-500">
                        <th className="border-1 border-gray-500">Name</th>
                        <th className="border-1 border-gray-500">University</th>
                        <th className="border-1 border-gray-500">Category</th>
                        <th className="border-1 border-gray-500">price</th>
                        <th className="border-1 border-gray-500">Innings played</th>
                        <th className="border-1 border-gray-500">Total Runs</th>
                        <th className="border-1 border-gray-500">Wickets</th>
                        <th className="border-1 border-gray-500">Balls Faced</th>
                        <th className="border-1 border-gray-500">Over Balled</th>
                        <th className="border-1 border-gray-500">Runs Conceded</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody >
                    {players.map((player) => (
                       <tr className="border-1 border-gray-500" key={player._id}>
                            <td className="text-center border-1 border-gray-500">{player.name}</td>
                            <td className="text-center border-1 border-gray-500">{player.university}</td>
                            <td className="text-center border-1 border-gray-500">{player.category}</td>
                            <td className="text-center border-1 border-gray-500">{player.price}</td>
                            <td className="text-center border-1 border-gray-500">{player.inningsplayed}</td>
                            <td className="text-center border-1 border-gray-500">{player.totalruns}</td>
                            <td className="text-center border-1 border-gray-500">{player.wickets}</td>
                            
                            <td className="text-center border-1 border-gray-500">{player.ballsfaced}</td>
                            <td className="text-center border-1 border-gray-500">{player.overballed}</td>
                            <td className="text-center border-1 border-gray-500">{player.runsconceded }</td>
                            <td className="text-center"><button className="rounded-md mx-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleEdit(player)}>Edit</button>
                            <button className="rounded-md bg-red-600 px-1 py-1 text-sm mx-1 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={() => handleDelete(player._id!)}>Delete</button></td>
                        </tr>
                
                    ))}

                </tbody>
                
            </table>
        </div>

    

    </>
    );
};

export default PlayerManagement;