import { use, useState } from "react";
import type { ITechnology } from "../../index";
import Technology from "../Technology/Technology";
import { Bounce, toast } from "react-toastify";

interface technologyProps {
   technologyPromise: Promise<ITechnology[]> 
}

const Technologies = ({ technologyPromise }:technologyProps) => {
    const technologies = use(technologyPromise)

    //for selected stack 
    const [selectedStack, setSelectedStack] = useState<ITechnology[]>([])
    const handelAddToStack = (tech:ITechnology) =>{
        //check already stack exist or not 
        const isExist = selectedStack.find(stack => stack.id === tech.id)
        if (isExist) {
            toast.error("Stack is already selected", {
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
        } else {
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

    }
    return (
        
        <div className="container mx-auto">
            <div className="px-4 md:px-0 py-8">
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

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* //left content  */}
            <div className="lg:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                    <Technology
                    key={tech.id}
                    tech={tech}
                    handelAddToStack={handelAddToStack}
                    />
                ))}
                </div>
            </div>


            {/* //right content  */}
            <div className="lg:col-span-3 border border-gray-100 rounded-3xl p-6 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
                <span className="bg-pink-100 text-[#EC4899] font-bold text-xs px-2.5 py-1 rounded-full">
                    {/* //count  */}
                    {selectedStack.length}
                </span>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Technologies;