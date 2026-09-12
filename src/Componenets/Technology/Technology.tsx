import type { ITechnology } from "../../index";

 
interface ITechProps{
    tech: ITechnology 
    handelAddToStack:(tech:ITechnology)=>void
}
const Technology = ({ tech, handelAddToStack }:ITechProps) => {
    const {name, category, description, icon, rating, difficulty, badge} = tech
    return (
<div className="border border-gray-100 rounded-3xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-5">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          </div>
          <span className="bg-sky-50 text-sky-500 text-xs px-3 py-1.5 rounded-full font-medium">
            {badge}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-5 text-xs text-gray-600 font-medium">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">
            {category}
          </span>
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">
            {difficulty}
          </span>
          <span className="ml-auto flex items-center gap-1 font-bold text-gray-800">
            <span className="text-yellow-400">★</span> {rating}
          </span>
        </div>
        <button
        onClick={()=> handelAddToStack(tech)}
        className="w-full bg-[#0F172A] text-white py-3 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
          Add to Stack
        </button>
      </div>
    </div>
    );
};

export default Technology;