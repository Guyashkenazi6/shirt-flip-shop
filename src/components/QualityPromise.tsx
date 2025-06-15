
import React from 'react';

export const QualityPromise = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
            <div className="rounded-lg overflow-hidden card-hover">
                <img 
                  src="/lovable-uploads/098b5cb0-68c4-4c37-8dd4-f3c2a7ce631c.png"
                  alt="T-shirt quality details"
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
