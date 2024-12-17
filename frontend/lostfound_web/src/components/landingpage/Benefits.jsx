import React from "react";

const Benefits = () => {
  const benefits = [
    { title: "Easy Reporting", icon: "📝" },
    { title: "Community Support", icon: "🤝" },
    { title: "Real-time Updates", icon: "⏱️" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Benefits Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl mb-4">{benefit.icon}</span>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
