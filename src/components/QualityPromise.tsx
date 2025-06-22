
import React from 'react';

export const QualityPromise = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
            <div className="rounded-lg overflow-hidden card-hover">
                <img 
                  src="/lovable-uploads/e09b2da3-ea72-4c62-a6c7-4cd848d641b9.png"
                  alt="Premium 100% cotton t-shirt quality showcase"
                  className="w-full h-full object-cover"
                />
            </div>
        </div>
        <div className="md:order-1">
          <h2 className="text-4xl font-bold mb-4">Uncompromising Quality</h2>
          <p className="text-gray-300 mb-6 text-lg">
            We source only the finest 100% cotton to create our garments. From the reinforced stitching to the soft-touch fabric, every detail is considered to ensure maximum comfort and durability.
          </p>
        </div>
      </div>
    </section>
  );
};
