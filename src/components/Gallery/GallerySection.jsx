import GalleryItems from "./GalleryItem";

const GallerySection = () => {
  return (
    <div className="container mx-auto px-4 py-9">
      <div className="gallery-header flex justify-between items-center">
        <h4 className="text-black font-medium text-2xl">Deals</h4>
        <button className="btn btn-outline btn-primary">view all deals</button>
      </div>

      <GalleryItems />
    </div>
  );
};

export default GallerySection;
