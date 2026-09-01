import {  useEffect, useState } from "react"

import Input from "./Input"
import Rating from "./Rating"

function Review() {
  function Reviews() {
    return (
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");

    return savedReviews ? JSON.parse(savedReviews) : [];)
  });


  let [rating, setRating] = useState(0)
  // let formRef=useRef(null)
  let  [review, setReview] = useState("")
  let [name, setName] = useState("")
    useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  const handleSubmit = (e) => {
    e.preventDefault()
    const newReview = {
      id: Date.now(),
      name: name,
      review: review,
      rating: Number(rating)
    };
    setReviews([...reviews, newReview]);
    setRating(0)
    setReview ("")
    setName("")

  } 

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-6 p-8 rounded-2xl border border-white/20 shadow-lg"
      >
        <h1 className="text-4xl font-bold text-white">
          Leave a Review
        </h1>

        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // ref={formRef}
          placeholder="Enter your name (optional)"
          className="w-full border border-white/30 text-white rounded-md p-3"
        />

        <textarea
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enter your review"
          className="w-full h-48 border border-white/30 text-white rounded-md p-3 resize-none"
        />

        <div>
          <p className="text-white mb-2">Your rating</p>
          <Rating
            value={rating}
            onChange={setRating}
          />
        </div>

        <Input
          type="submit"
          value="Submit Review"
          className="bg-yellow-400 text-black rounded-lg p-3 cursor-pointer"
        />
      </form>
    </div>
  )
}
}
 export default Review