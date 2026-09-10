
import bannerImg from '../../assets/banner-stack.png'
const Banner = () => {
    return (
<div className="container mx-auto py-12 px-4 md:px-0">
  <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
    
    {/* Left Side Content */}
    <div className="max-w-[570px] text-left">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
        Build Your Ideal <br />
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h1>

      <p className="py-6 text-gray-500 text-lg">
        Explore frontend, backend, database, and tooling options,
        compare them side by side, and put together the stack that fits your next project.
      </p>

      <div className="flex items-center gap-4">
        <button className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 hover:opacity-90 transition">
          Explore Technologies
        </button>

        <button className="px-6 py-3 rounded-xl font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <img
      alt="Banner Image"
      src={bannerImg}
      className="w-full max-w-[500px] object-contain"
    />

  </div>
</div>
    );
};

export default Banner;