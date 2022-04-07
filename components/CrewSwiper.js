import data from "./Data/data.json";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import { useEffect } from "react";

const douglas = data.crew[0];
const mark = data.crew[1];
const victor = data.crew[2];
const anousheh = data.crew[3];

useEffect(() => {
  const slide = document.querySelector(".swiper").swiper;
  // have access to it
}, []);

class CrewSwiper extends React.Component {
  render() {
    return (
      <Swiper className="mySwiper" id="crewSwipe" mousewheel={true}>
        <SwiperSlide>
          {({ isActive }) => <img src={douglas.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(douglas), setDouglasActive(true)) : setDouglasActive(false))} />}
        </SwiperSlide>
        <SwiperSlide>{({ isActive }) => <img src={mark.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(mark), setMarkActive(true)) : setMarkActive(false))} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <img src={victor.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(victor), setVictorActive(true)) : setVictorActive(false))} />}</SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <img src={anousheh.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(anousheh), setAnoushehActive(true)) : setAnoushehActive(false))} />}
        </SwiperSlide>
      </Swiper>
    );
  }
}
