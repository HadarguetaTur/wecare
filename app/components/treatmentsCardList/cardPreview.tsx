import React from 'react';
import Button from '../button/Button';

// Props interface to ensure type safety
interface CardPreviewProps {
    card: {
        id: string;
        title: string;
        description: string;
        category: string;
        imageSrc: string | null;
    };
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {

    const handleSendMessage = () => {
        console.log('Sending message to:', card.id);
        // Here, implement your logic to open a messaging modal or navigate to a messaging page
    };

    const getRandomBgColor = () => {
        const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 'bg-purple-200'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="border rounded-lg p-4 shadow-md max-w-sm flex flex-col items-center justify-center py-20">
            {card.imageSrc ? (
                <img src={card.imageSrc} alt={card.title} className="rounded-lg mb-4" />
            ) : (
                <div className={`flex items-center justify-center h-40 w-40 mb-4 rounded-full text-2xl text-white ${getRandomBgColor()}`}>
                    {card.title[0].toUpperCase()}
                </div>
            )}
            <h1 className="text-lg font-bold mb-2">{card.title}</h1>
            <h3 className=" font-bold mb-2">{card.category}</h3>
            <p>{card.description}</p>
       
           


        </div>
    );
};

export default CardPreview;