import React from 'react';

const MissionVision = () => {
    return (
        <div>
            
            <header
  class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
>
  <div
    class="relative  p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
    style={{zIndex:"1"}}
  >
    Welcome to my site!
  </div>
  <video
    autoplay="{true}"
    loop
    muted
    class="absolute  w-[100%]"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
  </video>
</header>


        </div>
    );
};

export default MissionVision;