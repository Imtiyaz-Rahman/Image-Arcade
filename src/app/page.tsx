import BannerImage from "./components/banner-image.jsx";
import GalleryImage from "./components/gallery-image.jsx";
import RefreshButton from "./components/refresh-button.jsx";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pt-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Opening Title and Banner */}
      <div className="flex flex-col">
        <div>
          <h1 className="flex justify-center font-normal text-4xl subpixel-antialiased text-green-700">Image Arcade</h1>
        </div>
        <div className="object-fill">
          <BannerImage />
        </div>
      </div>

      {/* Display API Image  */}
      <div className="flex flex-col p-40">
        <div className="ml-auto">
          <GalleryImage />
        </div>
        <div className="">
          <GalleryImage />
        </div>
        <div className="ml-auto">
          <GalleryImage />
        </div>
        <div className="">
          <GalleryImage />
        </div>
        <div className="ml-auto">
          <GalleryImage />
        </div>
        <div className="">
          <GalleryImage />
        </div>
        <div className="ml-auto">
          <GalleryImage />
        </div>
        <div className="">
          <GalleryImage />
        </div>
        <div className="ml-auto">
          <GalleryImage />
        </div>
      </div>

      {/* Refresh Button */}
      <div>
        <RefreshButton />
      </div>
    </div>
  );
}
