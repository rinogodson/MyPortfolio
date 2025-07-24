"use client";
import { useState } from 'react';
import ServerImage from './ServerImage';

function ImageView({url}: { url: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const imageUrl = url;
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <ServerImage url={imageUrl} openModal={openModal}/>
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in cursor-crosshair"
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
            >
              ✕
            </button>
            
            <img
              src={imageUrl}
              alt="A beautiful view of a mountain landscape"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default ImageView;
