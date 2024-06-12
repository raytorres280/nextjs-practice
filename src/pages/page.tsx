import Image from "next/image";
import OnboardingForm from "../app/onboardingForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OnboardingForm />      
    </main>
  );
}
