import { use, useState } from "react";
import type { ITechnology } from "../../index";
import Technology from "../Technology/Technology";
import { Bounce, toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";

interface technologyProps {
   technologyPromise: Promise<ITechnology[]> 
}

const Technologies = ({ technologyPromise }:technologyProps) => {
    const technologies = use(technologyPromise)

    //for selected stack 
    const [selectedStack, setSelectedStack] = useState<ITechnology[]>([])
    const handelAddToStack = (tech:ITechnology) =>{
     setSelectedStack([...selectedStack, tech]);
            toast.success("Added Your Stack", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

    }

    //remove stack handel 
    const handelRemoveStack = (id:number) => {
        const remainingStack = selectedStack.filter(stack => stack.id !== id);
        setSelectedStack(remainingStack);
        toast('Remove Technology From Your Stack', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }

    //remove all from stack 
    const handelRemoveAllFromStack = () =>{
        setSelectedStack([]);
        toast('Remove All Technology From Your Stack', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    return (
        
        <div className="container mx-auto">
            <div className="px-4 md:px-0 py-12 md:py-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                Technologies
                </span>
                </h2>
                <p className="mt-2 text-gray-400 text-sm md:text-lg font-normal">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8">
            {/* //left content  */}
            <div className="lg:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                    <Technology
                    key={tech.id}
                    tech={tech}
                    handelAddToStack={handelAddToStack}
                    selectedStack={selectedStack}
                    />
                ))}
                </div>
            </div>


            {/* //right content  */}
            <div className="lg:col-span-3 border border-gray-100 rounded-3xl p-6 bg-white shadow-sm">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Your Stack</h3>
                    <p className="text-gray-400 font-normal text-sm mt-1">
                    {selectedStack.length === 0
                        ? "No technologies selected yet."
                        : `${selectedStack.length} Technology Selected`}
                    </p>
                </div>

                {selectedStack.length === 0 ? (
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center text-gray-400 text-sm font-medium bg-white">
                    Your stack is empty.
                    </div>
                ) : (
                    <div className="space-y-3">
                    {selectedStack.map((stack) => (
                        <div
                        key={stack.id}
                        className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50"
                        >
                              <div className="flex items-center gap-3">
                                <img src={stack.icon} alt={stack.name} className="w-6 h-6 object-contain" />
                                <div>
                                    <span className="text-sm font-semibold text-gray-800">{stack.name}</span>
                                    <h2 className="text-gray-400">{stack.category}</h2>
                                </div>
                                </div>

                            <button 
                            onClick={()=> handelRemoveStack(stack.id)}
                                className="text-red-500 hover:text-red-700 text-xl cursor-pointer transition-colors"
                            >
                                <MdDeleteForever />
                            </button>
                        </div>
                    ))}
                    </div>
                )}
                {selectedStack.length > 0 && (
                    <button
                    onClick={handelRemoveAllFromStack}
                    className="w-full mt-4 py-2 text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl border border-red-200 transition-colors cursor-pointer"
                    >
                    Remove All
                    </button>
                )}
                </div>

        </div>
        </div>
    );
};

export default Technologies;