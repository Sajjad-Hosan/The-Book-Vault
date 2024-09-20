import { HiMiniXMark } from "react-icons/hi2";

const CategoryModal = () => {
  const genres = [
    "Action",
    "Adventure",
    "Activity",
    "Animals",
    "Anthologies",
    "Arts",
    " Literature",
    "Cars ",
    " Trucks",
    "Classics",
    "Contemporary",
    "Cultural",
    "European",
    "Foreign Language",
    "Fiction",
    "Historical",
    "Uncategorized",
  ];
  const authors = [
    { name: "Arthur Gonzalez", count: 1 },
    { name: "Dana Chambers", count: 1 },
    { name: "Ernesto Wade", count: 1 },
    { name: "Karla Newman", count: 2 },
    { name: "Misty Figueroa", count: 2 },
    { name: "Suzanne Casey", count: 1 },
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
                {genres.map((gen, i) => (
                  <button key={i} className="btn px-8">
                    {gen}
                  </button>
                ))}
              </div>
            </div>
            <div className="card border p-5 mt-5">
              <h1 className="font-semibold">Authors</h1>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {authors.map(({ name, count }, i) => (
                  <button key={i} className="btn px-8">
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
