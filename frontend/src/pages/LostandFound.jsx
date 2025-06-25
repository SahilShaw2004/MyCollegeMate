"use client"

import React from 'react';
import Card from '../components/Card';
import { MagnifyingGlassIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    icon: <ClipboardDocumentListIcon className="w-8 h-8" />, title: 'Report Lost Item', description: 'Submit details about your lost item to help us find it.', buttonText: 'Report Lost Item', bgColor: 'bg-gradient-to-br from-yellow-100 to-orange-100', to: '/lostandfound',
  },
  {
    icon: <MagnifyingGlassIcon className="w-8 h-8" />, title: 'Browse Found Items', description: 'See items that have been found on campus.', buttonText: 'Browse Found Items', bgColor: 'bg-gradient-to-br from-mint-200 to-green-100', to: '/lostandfound',
  },
];

const LostandFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 font-poppins">Lost & Found</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((card) => (
          <Card key={card.title} {...card} onClick={() => navigate(card.to)} />
        ))}
      </div>
    </div>
  );
};

export default LostandFound;
