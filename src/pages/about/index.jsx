

import Herocomponent from "../../components/Herocomponent";
import { Images } from "../../constant/img";


export const   About=()=> {
  return (

    <>
    <Herocomponent  background={Images.p1} title="About Us "/>


    <div className="w-full">

        


      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <img
            src={Images.men2}
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Story
          </h2>

          <p className="text-gray-500 leading-relaxed mb-6">
        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.


          </p>

          {/* Quote */}
          <div className="border-l-4 border-gray-400 pl-4 text-gray-500">
            <p className="italic">
Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.

- Steve Job’s            </p>
            <span className="block mt-2 font-semibold">
              – Steve Jobs
            </span>
          </div>
        </div>
      </section>



    </div>
    </>
  );
}
