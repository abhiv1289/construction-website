// InfoCards.jsx
import { cardsData } from "../data/InfoCardsData";

const InfoCards = () => {
  return (
    <div className="w-full px-6 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {cardsData.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} ${card.text} p-6 rounded-sm flex flex-col justify-between`}
          >
            {/* Title */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {card.title}
              </h2>

              {/* Divider */}
              <div className="border-t border-white/40 mb-4"></div>

              {/* Items */}
              {card.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-3 border-b border-white/30"
                >
                  <div>
                    <p className="text-sm opacity-80">{item.date}</p>
                    <p className="text-sm">{item.text}</p>
                  </div>

                  {/* Arrow */}
                  <span className="text-xl">→</span>
                </div>
              ))}
            </div>

            {/* Show all */}
            <div className="text-right mt-4 text-sm underline cursor-pointer">
              show all
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default InfoCards;