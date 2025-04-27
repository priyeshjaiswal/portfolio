import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image src="/static/img/girl.png" alt="Testimonial avatar" width={60} height={60} />
          </div>
          <div className="media-body">
            <p>
              &quot;I&apos;ve been working with priyesh for over 2 years now, and they have been
              absolutely fantastic in managing and maintaining our website. Their attention to
              detail and quick response time for updates and fixes has made our online presence
              consistently reliable. They understand our needs perfectly and have helped our
              business grow steadily.&quot;
            </p>
            <h6>Priyanka Bansal</h6>
            <span>Founder, Nebesa Organics</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image src="/static/img/boy.png" alt="Testimonial avatar" width={60} height={60} />
          </div>
          <div className="media-body">
            <p>
              &quot;The medical prescription management app they developed has revolutionized how I handle patient prescriptions.
              The app makes it incredibly easy to track medications, dosages, and patient history. Their understanding of
              healthcare workflows and attention to security compliance really shows in the final product. It has significantly
              improved my practice&apos;s efficiency.&quot;
            </p>
            <h6>Dr. Imran Khan</h6>
            <span>Sexologist, Gurgaon</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image src="/static/img/girl.png" alt="Testimonial avatar" width={60} height={60} />
          </div>
          <div className="media-body">
            <p>
              &quot;Working with Priyesh was a game-changer for our clothing brand. He created an amazing 
              e-commerce website that perfectly captures our brand&apos;s essence. The site is not only 
              beautiful but also highly functional, making it easy for our customers to browse and it have increased significantly since launch, and the integrated 
              marketing solutions he provided have helped us reach a wider audience.&quot;
            </p>
            <h6> Sanobar</h6>
            <span>Founder, Subhiyah Clothing</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">  
          <div className="avatar">
            <Image src="/static/img/girl.png" alt="Testimonial avatar" width={60} height={60} />
          </div>
          <div className="media-body">
            <p>
              &quot;The website and software solution developed for our international courier service has 
              transformed our business operations. The tracking system and customer management features 
              have streamlined our processes significantly. Our clients love the easy-to-use interface, 
              and it has helped us manage our international shipments much more efficiently.&quot;
            </p>
            <h6>Komal</h6>
            <span>Manager, Sai Overseas Express</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
