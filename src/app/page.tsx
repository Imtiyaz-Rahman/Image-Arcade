
import BannerImage from "./components/banner-image";



export default function Home() {

  // window.onload = function() {
  //   banner_image();
  // };
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Opening Title and Banner */}
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="flex p-2">Image Arcade</h1>
        </div>
        <div className="flex p-2">
          <BannerImage />
        </div>
      </div>

      {/* Display API Image  */}
      <div></div>

    </div>
  );
}
