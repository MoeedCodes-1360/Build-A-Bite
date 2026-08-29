import React from 'react'
import SlideIn from './SlideIn'

const About = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 text-white">
      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">01 / About Build-a-Bite</p> */}
          <h1 className="text-4xl font-bold md:text-6xl">“More Than Just a Meal”</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Build-a-Bite was created around a simple idea: great food should be exciting, satisfying, and made for everyone.
            <br /><br />
            From the moment you open our menu to the last bite of your meal, we want the experience to feel effortless. Whether you’re grabbing a quick lunch, treating yourself after a long day, or sharing a meal with friends, Build-a-Bite brings your favorite comfort foods together under one roof.
          </p>
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">02 / Our Story</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Where It All Started”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Build-a-Bite began with a love for the foods people naturally gather around.
            <br /><br />
            Burgers, pizza, crispy fries, creamy shakes, and desserts have a way of turning an ordinary moment into something worth remembering. We wanted to create a place where those favorites could come together while still leaving room to discover something new.
            <br /><br />
            And that’s how Build-a-Bite came to life.
          </p>
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">03 / What We Believe</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Simple Food. Big Flavor.”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            We believe good food doesn’t need to be complicated.
            <br /><br />
            It needs great ingredients, thoughtful preparation, generous portions, and flavors that make you want another bite.
            <br /><br />
            That’s why every item on our menu is designed around one goal:
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">Make every bite worth it.</p> */}
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">04 / Our Menu</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Something for Every Craving”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Some days call for a juicy burger. Other days demand a cheesy pizza.
            <br /><br />
            Maybe you want crispy fries on the side, a cold shake, or something sweet after dinner. Whatever the craving, our menu is built to give you plenty of choices.
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">Burgers. Pizza. Fries. Shakes. Desserts.</p> */}
          <p className="max-w-3xl text-lg leading-8 text-gray-200">One menu, countless ways to build your perfect meal.</p>
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">05 / Our Approach</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Made With Care”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            We pay attention to the details that make familiar food taste better.
            <br /><br />
            From properly seasoned fries and flavorful sauces to satisfying burgers and rich desserts, every part of the experience matters.
            <br /><br />
            We aren’t trying to reinvent food.
            <br /><br />
            We’re trying to make the food you already love even harder to forget.
          </p>
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">06 / Our Customers</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Built Around You”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            Build-a-Bite isn’t just about what we serve. It’s about the people sitting across the table, ordering their favorite meal, trying something new, and coming back for the thing they couldn’t stop thinking about.
            <br /><br />
            Your cravings shape what we do.
            <br /><br />
            Your favorites inspire our menu.
            <br /><br />
            And every order gives us another reason to keep improving.
          </p>
        </section>
      </SlideIn>

      <SlideIn>
        <section className="flex flex-col gap-4 border-t border-white/20 pt-12">
          {/* <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">07 / The Build-a-Bite Promise</p> */}
          <h2 className="text-4xl font-bold md:text-5xl">“Your Craving. Your Choice. Your Bite.”</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-200">
            We want every visit to Build-a-Bite to leave you satisfied.
            <br /><br />
            Not just because you had something to eat, but because you had something you genuinely enjoyed.
            <br /><br />
            So whether you’re here for your usual order or looking for your next favorite, there’s always something waiting for you.
          </p>
          {/* <p className="text-xl font-semibold text-sky-300">Build your meal. Make it yours. Enjoy every bite.</p> */}
        </section>
      </SlideIn>
    </main>
  )
}

export default About
