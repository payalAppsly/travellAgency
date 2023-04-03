import React from "react";

import {
  Banner,
  Bookings,
  Category,
  Subscribe,
  Destinations,
  Footer,
  LogoNav,
  Testimonials,
} from "..";

const HomePage = () => {
  console.log("HOMEPAGE");
  return (
    <>
      <Banner />
      <Category />
      <Destinations />
      <Bookings />
      <Testimonials />
      <LogoNav />
      <Subscribe />
      <Footer />
    </>
  );
};

export default HomePage;
