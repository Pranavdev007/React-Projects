import { useEffect, useState } from "react";

function Carousel() {
  const data = [
    {
      id: 1,
      image:
        "https://i.dailymail.co.uk/i/pix/2015/06/27/15/2A055F3A00000578-0-image-a-12_1435417042782.jpg",
      title: "Selena Gomez",
    },
    {
      id: 2,
      image:
        "https://w0.peakpx.com/wallpaper/738/900/HD-wallpaper-emilia-clarke-sexy-actress-gorgeous-beautiful-actress-hot-actress-game-of-thrones-emilia-hot.jpg",
      title: "emilia clarke",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/eb/56/2a/eb562a2d51ed3cbe744ebb0741ba8c62.jpg",
      title: "jenifer aniston",
    },
    {
      id: 4,
      image:
        "https://deadline.com/wp-content/uploads/2019/10/jessica-henwick-1-e1571253793819.jpg",
      title: "Jessica Henwick",
    },
  ];
  useEffect(() => {
    let timer = setTimeout(() => nextHandle(), 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  const [id, setId] = useState(0);
  function prevHandle() {
    if (id === 0) setId(data.length - 1);
    else setId(id - 1);
  }
  function nextHandle() {
    if (id === data.length - 1) setId(0);
    else setId(id + 1);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img
          src={data[id].image}
          alt={data[id].title}
          width={"700px"}
          height={"600px"}
        />
      </div>
      <div>
        <p>Item : {data[id].id}</p>
        <button onClick={() => prevHandle()}>Prev</button>
        <button onClick={() => nextHandle()}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
