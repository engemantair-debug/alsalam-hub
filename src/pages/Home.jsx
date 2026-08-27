import { useState } from "react";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import WifiAccess from "../components/WifiAccess.jsx";
import SubscriptionPreview from "../components/SubscriptionPreview.jsx";
import DrinkOrder from "../components/DrinkOrder.jsx";
import About from "../components/About.jsx";
import CTA from "../components/CTA.jsx";
import SubscriptionForm from "../components/SubscriptionForm.jsx";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openForm = (plan) => {
    setSelectedPlan(plan);
    setFormOpen(true);
  };

  return (
    <>
      <Hero />
      <Services />
      <WifiAccess />
      <SubscriptionPreview onSubscribe={openForm} />
      <DrinkOrder />
      <About />
      <CTA />

      <SubscriptionForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
