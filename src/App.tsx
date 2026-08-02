import LandingPage from "@/components/LandingPage";

/** Canvas dimensions the Figma design was authored against. */
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 11494;

export default function App() {
  return (
    <div className="overflow-x-auto bg-white">
      <div
        className="relative"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        <LandingPage />
      </div>
    </div>
  );
}
