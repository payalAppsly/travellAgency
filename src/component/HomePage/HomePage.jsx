import React from "react";

import {
  Banner,
  Bookings,
  Category,
  ContactUs,
  Desitnations,
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
      <Desitnations />
      <Bookings />
      <Testimonials />
      <LogoNav />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
