import React from 'react'
import SlideIn from './SlideIn'

const Main = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 text-white">
      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">01 / Why Build-a-Bite?</p> */}
          <h1 className="text-4xl font-bold md:text-6xl">“Something for Every Craving”</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            At Build-a-Bite, we believe great food should be simple, satisfying, and made for every kind of craving. Whether you’re in the mood for a loaded burger, a cheesy pizza, crispy fries, a creamy shake, or something sweet to finish, there’s always something worth biting into.
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">Fresh flavors. Generous portions. Zero boring bites.</p> */}
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">02 / Our Favorites</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Customer Favorites”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Not sure what to order? Start with the dishes everyone keeps coming back for.
          </p>
          <div className="grid gap-6 pt-4 md:grid-cols-2">
            <article>
              <h3 className="text-2xl font-semibold">🍔 Classic Burger</h3>
              <p className="mt-2 leading-7 text-gray-300">A juicy beef patty, fresh vegetables, and our signature sauce packed into one seriously satisfying burger.</p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold">🍕 Pepperoni Pizza</h3>
              <p className="mt-2 leading-7 text-gray-300">Crispy crust, rich tomato sauce, loads of mozzarella, and spicy pepperoni. The classic for a reason.</p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold">🍟 Loaded Cheese Fries</h3>
              <p className="mt-2 leading-7 text-gray-300">Golden crispy fries covered in creamy cheese sauce and delicious toppings. Sharing is technically optional.</p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold">🥤 Oreo Shake</h3>
              <p className="mt-2 leading-7 text-gray-300">Thick, creamy, chocolatey, and packed with crushed Oreo cookies. Dessert pretending to be a drink.</p>
            </article>
          </div>
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">03 / Build Your Perfect Bite</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Your Craving. Your Choice.”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Why settle for one kind of comfort food?
            <br /><br />
            Pick your favorite main, add something crispy on the side, grab a refreshing shake, and finish things off with dessert. Mix and match your favorites and create a meal that’s completely yours.
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">Choose it. Build it. Bite into it.</p> */}
        </section>
      </SlideIn>
      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">04 / Fresh From Our Kitchen</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Made to Be Enjoyed”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Every meal at Build-a-Bite is prepared with flavor in mind. From perfectly seasoned fries to freshly assembled burgers and cheesy pizzas, we focus on the little details that turn a simple meal into something you’ll remember.
            <br /><br />
            Because good food shouldn’t just fill you up.
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">It should make you want another bite.</p> */}
        </section>
      </SlideIn>
      <SlideIn>
        <section className="flex flex-col gap-4 border-t border-white/20 pt-12">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">05 / Ready to Bite?</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Your Next Favorite Meal Is Waiting”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Hungry? You already know the answer.
            <br /><br />
            Explore our menu, find your favorites, and build a meal worth coming back for.
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">Build your bite. Make it yours.</p> */}
        </section>
      </SlideIn>
      <SlideIn>
        <section className="flex flex-col  flex-wrap  " >
          <h1 className='text-4xl font-semibold  px-4 py-1 rounded-full m-4 '>Customer Reviews</h1>
          <div className="overflow-hidden h-36 ">
            <ul className="border border-white  w-full animate-marquee ">
              {JSON.parse(localStorage.getItem("reviews") || "[]").map((review) => (<li key={review.id}>{review.name}: {review.review}</li>))}
            </ul>
          </div>
        </section>


      </SlideIn>
      <SlideIn>
        <section>
          <footer className="text-center">
            <p>Thank you for choosing Build-a-Bite!</p>
            <p>We hope you enjoyed your meal.</p>
          </footer>
        </section>
      </SlideIn>
    </main >
  )
}

export default Main
