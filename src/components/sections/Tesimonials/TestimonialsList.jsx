import Testimonial from "./Testimonial"

const TestimonialsList = ({ testimonials }) => {
  return (
    <ul className="flex flex-col gap-y-6">
      {testimonials.map( ( testimonial ) => (
        <Testimonial key={testimonial.id} testimonial={testimonial} />
      ))}
    </ul>
  )
}

export default TestimonialsList