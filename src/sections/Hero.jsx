import Button from "../components/Button";
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section
      id="home" className="w-full border-2 border-red-500 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-red-500  font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-8 text-8xl font-palanquin max-sm:text=[720px] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-4 mr-4">NikeBa</span>
          Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish NikeBa arrivals, quality comfort, and innovation for you active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-14">
          {statistics.map((stat) => (
            <div className="justify">
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
      {/* </div>
      <div> */}
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
