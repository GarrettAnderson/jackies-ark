import Carousel from "react-bootstrap/Carousel";
import "../Assets/Styles/Testimonial.css";

function Testimonial() {
  let testimonials = [
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
    {
      clientName: "Loren ipsum",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies at eros in eleifend.",
    },
  ];

  return (
    <section className="testimonial">
      <h4>TESTIMONIALS</h4>
      {/* <Carousel>
        {testimonials.map((testimonial) => {
          <Carousel.Item>
            <Carousel.Caption>
              <h3>{testimonial.clientName}</h3>
              <p>{testimonial.testimonial}</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel> */}
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonial;
