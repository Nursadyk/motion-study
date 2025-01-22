import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface SelectedItems {
  country: string | null;
  specialization: string | null;
  higherEducation: string | null;
}
interface CategoriesProps {
  title: string;
  selectedItems?: SelectedItems;
  data: IUniverse[];
  handleSelection: (c: string, v: string | null) => void;
  type: string;
}
const Categories: React.FC<CategoriesProps> = ({
  title,
  data,
  selectedItems,
  type,
  handleSelection,
}) => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (category: string) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  const categories = [
    {
      title: "Higher Education",
      key: "higherEducation",
      data: data?.map((d) => d.name),
    },
    {
      title: "Countries",
      key: "country",
      data: data
        ?.map((d) => d.country)
        .filter(
          (d, index, array) => index === array.findIndex((el) => el.en === d.en)
        ),
    },
    {
      title: "Specialization",
      key: "specialization",
      data: [...new Set(data?.flatMap((d) => d.specialization))].filter(
        (d, index, array) => index === array.findIndex((el) => el.en === d.en)
      ),
    },
  ];
  const exam = () => {
    if (type === "countryPage" && selectedItems?.country !== null) {
      router.push(`/study/country/${selectedItems?.country}`);
    }
  };
  return (
    <div>
      <h3 className=" font-gilroyMedium text-[48px]">{title}</h3>
      <div className=" flex gap-x-[45px]">
        {categories.map((cat) => (
          <div key={cat.key} style={{ marginBottom: "20px" }}>
            <button
              className=" flex items-center text-xl"
              onClick={() => toggleDropdown(cat.key)}
            >
              {cat.title}
              <ChevronDown
                className={`ml-4 ${
                  activeDropdown === cat.key ? "rotate-180" : ""
                }`}
                color="#E8C94D"
              />
            </button>
            {activeDropdown === cat.key && (
              <div className="absolute z-10 w-[200px] border border-[#ccc]">
                {cat.data?.map((item, idx) => (
                  <button
                    className={`block p-[10px] dark:text-black text-left w-full hover:bg-blue-50 ${
                      selectedItems![cat.key as keyof typeof selectedItems] ===
                      (item && "en" in item ? item.en : null)
                        ? "bg-blue-50"
                        : " bg-white"
                    }`}
                    key={idx}
                    onClick={() => {
                      handleSelection(
                        cat.key,
                        item && "en" in item ? item.en : null
                      );
                      setActiveDropdown(null);
                      exam();
                    }}
                  >
                    {item && "en" in item ? item.en : null}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
