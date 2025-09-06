import React from "react";
import HeroInvite from "./HeroInvite";
import EventDetails from "./EventDetails";
import Slider from "./Slider";
import Footer from "./Footer";


export default function App() {
  return (
    <>
      <HeroInvite
        title="🌺 Onam Celebration — You’re Invited"
        subtitle="Celebrate joy, tradition, and togetherness."
        date="11 September 2025"
        time="6:30 PM onwards"
        venue="Grand Palace Hall, Kochi"
        ctaText="View Details"
        ctaHref="#details"
        // Leave bg blank to use the default Unsplash image below, or set a local path like '/assets/event-hero.jpg'
        bg=""
      />
      <Slider />
      <EventDetails />
      <Footer />
      

     
      
    </>
  );
}
