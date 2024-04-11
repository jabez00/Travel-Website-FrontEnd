import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 py-16 gap-4 px-4">
      <div className="lg:col-span-2 flex flex-col px-4 justify-evenly">
        <div>
          <h2 className="uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-justify py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            molestiae neque commodi culpa ad laudantium recusandae quis ipsum
            aspernatur dolore cumque, iste similique suscipit accusantium minima
            veniam ea necessitatibus earum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa sint cum repellat veritatis amet
            nobis culpa, similique, repudiandae sed ex molestias atque, nemo
            voluptate mollitia voluptatibus maxime quas ea sapiente.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col items-center text-center lg:flex-row">
            <button>
              <RiCustomerService2Fill size={60} />
            </button>
            <div className="uppercase">
              <h3 className="py-2">leading service</h3>
              <p className="px-4">
                all-incluseive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:flex-row">
            <button>
              <MdOutlineTravelExplore size={60} />
            </button>
            <div className="uppercase">
              <h3 className="py-2">leading service</h3>
              <p className="px-4">
                all-incluseive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-4 p-2 uppercase text-center border border-black">
          <p>nobis culpa, similique.d</p>
          <p>voluptatibus maxime quas ea</p>
          <p className="bg-gray-900 text-white">ex molestias atque, nemo</p>
        </div>
        <form className="w-full py-2">
          <div className="flex flex-col">
            <label>Destination</label>
            <select className="border p-2 rounded-md">
              <option>Bora Bora</option>
              <option>Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
              <option>Jamaica</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Check-In</label>
            <input className="border p-2 rounded-md" type="date" />
          </div>
          <div className="flex flex-col">
            <label>Check-Out</label>
            <input className="border p-2 rounded-md" type="date" />
          </div>
          <div className="pt-4">
            <button className="w-full">Rates & Availablility</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
