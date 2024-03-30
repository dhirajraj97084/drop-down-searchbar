import React from "react";
import { useState } from "react";
const searchData = [
  {
    name: "Fashion",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Shirt",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "Jacket",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
  {
    name: "Mobile",
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  },
  {
    name: "Laptop",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Home",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "book",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const filterSearchData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search))
    .slice(0, 8);
  return (
    <div>
      <div className="nav flex justify-between items-center py-2 px-4 bg-lime-500">
        <div className="left">
          <h1>hello</h1>
        </div>
        <div className="right">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-96 py-2 px-2 text-gray-600 outline-none placeholder-slate-700 bg-gray-400 rounded-md"
            placeholder="Search here"
            type="text"
          />
          {/* drop down  */}
          <div className="flex">
            {search && (
              <div className="drop_down  absolute mt-3 py-2 px-3 bg-gray-300 w-96 rounded-md">
                {filterSearchData.length > 0 ? <> {filterSearchData.map((item,index)=>{return (
                  <div key={index} className="div">
                    <div  className="img flex items-center gap-2 text-xl font-semibold my-2">
                      <img className="w-10 rounded-md" src={item.image} alt="" />
                      {item.name}
                    </div>
                  </div>
                ) })} </> : <>na</>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
