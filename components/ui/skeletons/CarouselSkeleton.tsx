const CarouselSkeleton = () => {
  return (
    <div className="pb-14">
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-surface rounded-lg h-[22rem] animate-pulse border border-border">
            <div className="h-48 bg-border/50"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-border/50 rounded mb-4"></div>
              <div className="h-4 w-full bg-border/50 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-border/50 rounded"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="block lg:hidden bg-surface rounded-lg h-[22rem] animate-pulse border border-border">
         <div className="h-48 bg-border/50"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-border/50 rounded mb-4"></div>
              <div className="h-4 w-full bg-border/50 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-border/50 rounded"></div>
            </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;