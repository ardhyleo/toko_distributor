import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCarousel, getCategory, getProduct } from "../Store/Action/Action";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([EffectFade, Navigation, Pagination]);

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);
  const bannerList = useSelector((state) => state.carousel.data);
  console.log(bannerList);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const categoryList = useSelector((state) => state.category.data);
  console.log(categoryList);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className={styles.Banner}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {bannerList?.data?.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.url_mobile} alt="img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Home;
