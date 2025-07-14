import main from "./assets/login-icon (1).png";
import {  } from "../src/assets/src/assets/3D perfume render.jpeg";
import moduleName from '../src/';

const Card = ({ title, description, discount }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
    {discount && (
      <span className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
        {discount}
      </span>
    )}
    <img className="rounded-t-lg" src={main} alt="Technology Icon" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
      </a>
    </div>
  </div>
);

const MainContent = () => {
  // Replace `mainCont` with an array of card objects
  const cardsData = [
    {
        image:"1",
      title: "Noteworthy Technology",
      description: "Here are the biggest enterprise technology acquisitions.",
      discount: null,
    },
    {
        image:"",
      title: "Exclusive Offer",
      description: "Discover amazing deals and discounts on the latest tech.",
      discount: "30%",
    },
    {
        image:"",
      title: "Innovation Highlights",
      description: "Explore the latest trends in technology.",
      discount: "15%",
    },
    {
        image:"",
      title: "Tech for All",
      description: "Affordable tech for every need.",
      discount: "20%",
    },
    {
        image:"",
      title: "Future-Ready Devices",
      description: "Prepare for the future with cutting-edge devices.",
      discount: null,
    },
    {
        image:"",
        title: "Tech for All",
        description: "Affordable tech for every need.",
        discount: "20%",
      },
      {
        image:"",
        title: "Future-Ready Devices",
        description: "Prepare for the future with cutting-edge devices.",
        discount: null,
      },
      {
        image:"",
        title: "Tech for All",
        description: "Affordable tech for every need.",
        discount: "20%",
      },
      {
        image:"",
        title: "Future-Ready Devices",
        description: "Prepare for the future with cutting-edge devices.",
        discount: null,
      },
      {
        image:"",
        title: "Noteworthy Technology",
        description: "Here are the biggest enterprise technology acquisitions.",
        discount: null,
      },
      {
        image:"",
        title: "Exclusive Offer",
        description: "Discover amazing deals and discounts on the latest tech.",
        discount: "30%",
      },
      {
        image:"",
        title: "Innovation Highlights",
        description: "Explore the latest trends in technology.",
        discount: "15%",
      },
      {
        image:"",
        title: "Tech for All",
        description: "Affordable tech for every need.",
        discount: "20%",
      },
      {
        image:"",
        title: "Future-Ready Devices",
        description: "Prepare for the future with cutting-edge devices.",
        discount: null,
      },
      {
        image:"",
          title: "Tech for All",
          description: "Affordable tech for every need.",
          discount: "20%",
        },
        {
            image:"",
          title: "Future-Ready Devices",
          description: "Prepare for the future with cutting-edge devices.",
          discount: null,
        },
        {
            image:"",
          title: "Tech for All",
          description: "Affordable tech for every need.",
          discount: "20%",
        },
        {
            image:"",
          title: "Future-Ready Devices",
          description: "Prepare for the future with cutting-edge devices.",
          discount: null,
        },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 m-5">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          discount={card.discount}
        />
      ))}
    </div>
  );
};

export default MainContent;
