import Testimonial from "./Testimonial"

const TestimonialsList = ({ testimonials }) => {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden">
      {testimonials.map( ( testimonial ) => (
        <Testimonial key={testimonial.id} testimonial={testimonial} />
      ))}
    </ul>
  )
}

export default TestimonialsList