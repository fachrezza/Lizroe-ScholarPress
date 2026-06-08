const steps = [
  "Consultation",
  "Send Document",
  "Requirement Analysis",
  "Processing",
  "Final Delivery",
];

export default function Workflow() {
  return (
    <section className="py-28 px-6 bg-white/5">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-3xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-400 text-black mx-auto flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <p className="mt-5 text-gray-300">
                {step}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}