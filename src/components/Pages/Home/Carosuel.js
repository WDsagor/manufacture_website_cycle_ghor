import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Ringer from "../../../Asset/ringger.png";
import Pamper from "../../../Asset/Panper.png";
import Back from "../../../Asset/Full-Back-Part.png";
import Font from "../../../Asset/Full-font-Part.png";
import Cycle from "../../../Asset/fullCycle.png";
import Handel from "../../../Asset/Handale.png";
import Paddle from "../../../Asset/PaddleBox.png";
import Workplace from "../../../Asset/workplace.png";

const Carosuel = () => {
  return (
    <Swiper
      className="max-w-screen-2xl"
      rewind={true}
      spaceBetween={30}
      effect="fade"
      centeredSlides={true}
      autoHeight={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
    >
      <SwiperSlide>
        <img src={Ringer} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end grid">
          <div>
            <p className="text-2xl lg:text-4xl font-bold"> Handle Ringer</p>
            <p className="py-2 hidden sm:block">
              Last month we reported on Spurcycle's innovative Griprings, now
              they're kickstarting again with the Ringer, a high quality
              aluminum, stainless steel, and brass bell.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 35</p>
            <button class="btn btn-xs sm:btn-sm md:btn-md  border-none btn-warning">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Pamper} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold"> Cycle Pumper</p>
            <p className="py-2 hidden sm:block">
              Wide metal base adds stability for easy pumping and adds long
              lasting durability. 38mm diameter high volume steel barrel is 21
              inch high to offer premium performance.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 45</p>
            <button class="btn btn-xs sm:btn-sm md:btn-md  border-none btn-warning">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Back} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold"> Back Wheel</p>
            <p className="py-2 hidden sm:block">
              Seat Stays: The seat stays are part of the bicycle frame. They
              connect the rear wheel to the seat tube. Chain Stays: These are
              also part of the frame and they connect the rear wheel to the
              bottom bracket/crank.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 165</p>
            <button class="btn btn-xs sm:btn-sm md:btn-md  border-none btn-warning">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Font} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold"> Front Wheel</p>
            <p className="py-2 hidden sm:block">
              The seat stays are part of the bicycle frame. They connect the
              rear wheel to the seat tube.These are also part of the frame and
              they connect the rear wheel to the bottom bracket/crank.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 155</p>
            <button class="btn btn-xs sm:btn-sm md:btn-md  border-none btn-warning">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Workplace} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold">Our Work Place</p>
            <p className="py-2 hidden sm:block">
              Bike fitting aims to prevent injuries, increase efficiency,
              comfort and improve performance for all cyclists. Bike fitting is
              for anybody who cycles, particularly if an overuse injury has
              occurred, to maximise their enjoyment and performance.
            </p>
            <button class="btn btn-xs sm:btn-sm md:btn-md  border-none btn-warning">
              Read More
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Handel} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold">Handlebars</p>
            <p className="py-2 hidden sm:block">
              ou can easily attach lights, brake levers, phone holders and other
              auxiliary biking equipment. It's also easier to fit different
              types of bar ends to provide extra hand positions and functions.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 115</p>
            <button class="btn btn-xs sm:btn-sm md:btn-md  border-none btn-warning">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Cycle} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold"> New Cycle</p>
            <p className="py-2 hidden sm:block">
              Ignite your instincts with our all-new aggressive track design
              made of 6061 aluminum. The smooth welding, hand polished frame
              with tapered headtube and threadless tapered forks allows you to
              take on the streets, track and whatever life throws at you in
              style. Flip Flops hubs for fixed-gear and freewheel riding
              options. Front brake included.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 599</p>
            <button class="btn btn-xs btn-warning sm:btn-sm md:btn-md  border-none">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Paddle} alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-2 lg:bottom-1/4 items-end">
          <div>
            <p className="text-2xl lg:text-4xl font-bold">Pedal Gear</p>
            <p className="py-2 hidden sm:block">
              Authenticity is the foundation of our business, and every item we
              sell is inspected by our expert team. Our authenticators are the
              most experienced and highly trained in the business. In addition,
              we source our products only from trusted suppliers.
            </p>
            <p className="text-2xl font-bold py-2"> Price $ 35</p>
            <button class="btn btn-warning btn-xs sm:btn-sm md:btn-md  border-none">
              BUY NOW
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carosuel;
