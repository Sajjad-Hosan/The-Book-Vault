import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const CategoryModal = () => {
  const [genres, setGenres] = useState("action");
  const [aut, setAut] = useState("arthur gonzalez");
  const genresArr = [
    "action",
    "adventure",
    "activity",
    "animals",
    "anthologies",
    "arts",
    " literature",
    "cars ",
    " trucks",
    "classics",
    "contemporary",
    "cultural",
    "european",
    "foreign language",
    "fiction",
    "historical",
    "uncategorized",
  ];
  const authorsArr = [
    { name: "arthur gonzalez", count: 1 },
    { name: "dana chambers", count: 1 },
    { name: "ernesto wade", count: 1 },
    { name: "karla newman", count: 2 },
    { name: "misty figueroa", count: 2 },
    { name: "suzanne casey", count: 1 },
  ];

  return (
    <>
      <dialog id="category_modal" className="modal">
        <div className="modal-box max-w-3xl">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Category</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-ghost">
                <HiMiniXMark className="text-lg" /> Close
              </button>
            </form>
          </div>
          <div className="p-5">
            <div className="card border p-5">
              <h1 className="font-semibold">Genres</h1>
              <div className="grid grid-cols-5 gap-5 mt-5">
                {genresArr.map((gen, i) => (
                  <button
                    key={i}
                    className={`btn px-8 ${
                      gen === genres ? "btn-neutral" : "btn-ghost"
                    }`}
                    onClick={() => setGenres(gen)}
                  >
                    {gen}
                  </button>
                ))}
              </div>
            </div>
            <div className="card border p-5 mt-5">
              <h1 className="font-semibold">Authors</h1>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {authorsArr.map(({ name, count }, i) => (
                  <button
                    key={i}
                    className={`btn px-8 ${
                      name === aut ? "btn-neutral" : "btn-ghost"
                    }`}
                    onClick={() => setAut(name)}
                  >
                    {name} <span className="semibold">({count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CategoryModal;
