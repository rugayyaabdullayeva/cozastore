import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Section1.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div id='section1'>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg" alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg" alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg" alt="" />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}