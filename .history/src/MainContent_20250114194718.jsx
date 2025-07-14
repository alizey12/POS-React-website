
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
        
      </a>
    </div>
  </div>
);
const mainCont = [1,2,3,4,5,6,7,8,9,10]
const MainContent = () => {
  const cardsData = [
    {
       
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology  ",
      discount: null,
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
