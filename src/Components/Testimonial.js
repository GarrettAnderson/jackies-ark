import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Assets/Styles/Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const showTooltip = (text) => {
    console.log(text);
  };

  let testimonials = [
    {
      clientName: "Diane and Tammy",
      testimonial:
        "Jackie has been our trusted pet sitter for more than twenty years. We left the area for a period of time, and we were immensely relieved to find Jackie's Ark still open for business upon our return to the Orlando area. We are especially grateful for Jackie's care with our senior pets over the years (dogs, cars, cockatiel). Her attential to detail, compassion, and expert level of care allow us to vacation worry-free when we leave our loved-ones at home. Thanks Jackie!!",
    },
    {
      clientName: "Dana Singer",
      testimonial:
        "Jackie has been our trusted petsitter for 19 years. This relationship is grounded in Jackie's unwavering commitment to providing the highest levels of care for our pets and home. We use Jackie for daily dog walks, visits, and vacation stays, and the peace of mind is invaluable. If consistent and capable care for your pets is important to you, then there is no one better than Jackie!",
    },
    {
      clientName: "F. A. Allen",
      testimonial:
        "The fact that Jackie has been caring for our cats for more than 15 years says it all. She's terrific! Jackie really gets to know both pets and pet parents -- our personalities, our preferences, our idiosyncrasies. In addition to providing superb kitty care at every visit, she's also a lot of fun and a great communicator. Our cats know Jackie and love having her visit; they welcome the play time, and lots of attention and affection! She gave expert care to our wonderful, calm older cats with health issues and meds, and now brings great energy to our new generation: the enjoyable chaos of two mischievous, everything-is-a-toy rescue kittens. It's a big responsibility to care for the pets we love and make sure the house is in good working order. We have trusted Jackie with both our pets and our home for many years and plan to for many more. Thank you, Jackie!",
    },
  ];

  return (
    <section className="testimonial">
      <h4>TESTIMONIALS</h4>
      {testimonials.map((testimonial) => {
        return (
          <div
            className="single-testimonial"
            // activeIndex={index}
            // onSelect={handleSelect}
          >
            <FontAwesomeIcon className="open-quote" icon={faQuoteLeft} />
            <div className="testimonial-text-container">
              <p
                className="testimonial-text"
                onMouseEnter={(e) => showTooltip(testimonial.testimonial)}
              >
                {testimonial.testimonial}
                {/* {testimonial.testimonial.substring(0, 250) + "..."} */}
              </p>
              <h5 className="testimonial-byline">{testimonial.clientName}</h5>
            </div>
            {/* <FontAwesomeIcon className="close-quote" icon={faQuoteLeft} /> */}
          </div>
        );
      })}
    </section>
  );
}

export default Testimonial;
