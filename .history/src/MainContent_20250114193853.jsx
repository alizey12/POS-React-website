
import main from "./assets/login-icon (1).png";

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
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
);

const MainContent = () => {
  const cardsData = [
    {
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      discount: null,
    },
    {
      title: "Exclusive Offer",
      description:
        "Discover amazing deals and discounts on the latest technologies!",
      discount: "30%",
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-5 gap-5 m-5">
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
