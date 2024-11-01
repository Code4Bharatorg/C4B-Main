'use client'
import React from "react";
import SupporterCard from "./SupporterCard/Card"; // Adjust path as needed

const SupportersSection = () => {
  const supporters = [
    {
      imageSrc: "/images/Supporters/1.png",
      altText: "Supporter 1 - Company A",
    },
    {
      imageSrc: "/images/Supporters/2.png",
      altText: "Supporter 2 - Company B",
    },
    {
      imageSrc: "/images/Supporters/3.png",
      altText: "Supporter 3 - Company C",
    },
    {
      imageSrc: "/images/Supporters/4.png",
      altText: "Supporter 4 - Company D",
    },
    {
      imageSrc: "/images/Supporters/5.png",
      altText: "Supporter 5 - Company E",
    },
    {
      imageSrc: "/images/Supporters/6.png",
      altText: "Supporter 6 - Company F",
    },
    {
      imageSrc: "/images/Supporters/7.png",
      altText: "Supporter 7 - Company G",
    },
    {
      imageSrc: "/images/Supporters/8.png",
      altText: "Supporter 8 - Company H",
    },
    {
      imageSrc: "/images/Supporters/9.png",
      altText: "Supporter 9 - Company I",
    },
    {
      imageSrc: "/images/Supporters/10.png",
      altText: "Supporter 10 - Company J",
    },
    {
      imageSrc: "/images/Supporters/11.webp",
      altText: "Supporter 11 - Company K",
    },
    {
      imageSrc: "/images/Supporters/12.png",
      altText: "Supporter 12 - Company L",
    },
    {
      imageSrc: "/images/Supporters/13.png",
      altText: "Supporter 13 - Company M",
    },
    {
      imageSrc: "/images/Supporters/14.png",
      altText: "Supporter 14 - Company N",
    },
    {
      imageSrc: "/images/Supporters/15.png",
      altText: "Supporter 15 - Company O",
    },
    {
      imageSrc: "/images/Supporters/16.png",
      altText: "Supporter 16 - Company P",
    },
    {
      imageSrc: "/images/Supporters/17.png",
      altText: "Supporter 17 - Company Q",
    },
    {
      imageSrc: "/images/Supporters/18.png",
      altText: "Supporter 18 - Company R",
    },
    {
      imageSrc: "/images/Supporters/19.png",
      altText: "Supporter 19 - Company S",
    },
  ];

  return (
    <section className="w-full h-auto p-5 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Title */}
      <div className="w-full flex items-center justify-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white">
          Clients/Partners
        </h1>
      </div>

      {/* Single Marquee Row */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee space-x-8">
          {supporters.concat(supporters).map((supporter, index) => (
            <SupporterCard
              key={`supporter-${index}`}
              imageSrc={supporter.imageSrc}
              altText={supporter.altText}
            />
          ))}
        </div>
      </div>

      {/* Styled JSX for Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Pause the animation on hover */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SupportersSection;
