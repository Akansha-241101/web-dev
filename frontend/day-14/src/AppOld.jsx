// 1. import images
import imageOne from "./images/image-1.jpg";
import imageTwo from "./images/image-2.jpg";
import imageThree from "./images/image-3.jpg";

// 2. create the ImageComponent

function ImageComponent({ image, title, description }) {
  return (
    <div className="flex item-center gap-4">
      <img className="w-100" src={image} alt={title} />
      <div className="flex flex-col justify-center gap-2">
        <p className="text-text text-4xl font-semibold">{title}</p>
        <p className="text-text text-xl">{description}</p>
      </div>
    </div>
  );
}

function AppOld() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center bg-background text-text p-10">
      {
        /* Call the ImageComponent with props */ <>
          <ImageComponent
            image={imageOne}
            title="Image 1"
            description="This is image 1"
          />
          <ImageComponent
            image={imageTwo}
            title="Image 2"
            description="This is image 2"
          />
          <ImageComponent
            image={imageThree}
            title="Image 3"
            description="This is image 3"
          />
        </>
      }
    </main>
  );
}

export default AppOld;
