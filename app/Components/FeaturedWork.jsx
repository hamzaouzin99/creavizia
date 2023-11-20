'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const FeaturedWorks = () => {

    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


  return (
    <div id="works" className="bg-orange-600 works -rotate-3 rounded-md hover:rotate-0 transition-all duration-300  bg-[url('/bg.svg')] bg-bottom object-cover">
      <div className="pt-16">
        <h1 className="text-center text-white text-4xl lg:text-5xl  font-bold  ">أعمالنا</h1>
      </div>
      <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>     
    </div>
  );
};


  


const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] rounded-md overflow-hidden bg-neutral-800"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10  grid  place-content-center">
        <p className="bg-gradient-to-br  from-white/20 to-white/0 hover:bg-gradient-to-br hover:from-orange-600  hover:to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            <Link href={card.href} className="text-gray-900 w-full hover:text-white">
          {card.title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FeaturedWorks;

const cards = [
  {
    url: "/ecommerce.png",
    title: "e-Commerce",
    id: 1,
    href:"/ecommerce.png"
  },
  {
    url: "/landing-page.png",
    title: "Landing Page",
    id: 2,
    href:"/landing-page.png"
  },
  {
    url: "/blog.png",
    title: "Blog Arabic",
    id: 3,
    href:"/blog.png"
  },
  {
    url: "/blog-en.png",
    title: "Blog",
    id: 4,
    href:"/blog-en.png"
  },
  {
    url: "/lms.png",
    title: "LMS",
    id: 5,
    href:"/lms.png"
  },
  {
    url: "/cms.png",
    title: "CMS",
    id: 6,
    href:"/cms.png"
  },
  {
    url: "/travel.png",
    title: "Travel Agency",
    id: 7,
    href:"/travel.png"
  },
];