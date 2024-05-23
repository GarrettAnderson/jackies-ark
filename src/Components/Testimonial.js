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

  let testimonials = [
    {
      clientName: "Diane and Tammy",
      testimonial:
        " Jackie has been our trusted pet sitter for more than twenty years. We left the area for a period of time, and we were immensely relieved to find Jackie's Ark still open for business upon our return to the Orlando area. We are especially grateful for Jackie's care with our senior pets over the years (dogs, cars, cockatiel). Her attential to detail, compassion, and expert level of care allow us to vacation worry-free when we leave our loved-ones at home. Thanks Jackie!!",
    },
    {
      clientName: "Loren ipsum",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies at eros in eleifend.",
    },
    {
      clientName: "Loren ipsum",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies at eros in eleifend.",
    },
  ];

  return (
    <section className="testimonial">
      <h4>TESTIMONIALS</h4>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {testimonials.map((testimonial) => {
          return (
            <Carousel.Item>
              <FontAwesomeIcon className="open-quote" icon={faQuoteLeft} />
              <Carousel.Caption>
                <p>{testimonial.testimonial}</p>
                <h5>{testimonial.clientName}</h5>
              </Carousel.Caption>
              <FontAwesomeIcon className="close-quote" icon={faQuoteLeft} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Testimonial;
