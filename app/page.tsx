import { Slide } from "@/components/ui/slides/Slide";
import { SlideApp } from "@/components/ui/slides/SlideApp";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <SlideApp>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
      </SlideApp>
    </main>
  );
}