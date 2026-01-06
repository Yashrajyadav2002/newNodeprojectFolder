import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const SLIDE_TIME = 3000;
  const STEP = 30;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let timer;

    const startProgress = () => {
      clearInterval(timer);
      setProgress(0);

      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + (STEP / SLIDE_TIME) * 100;
        });
      }, STEP);
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("slid.bs.carousel", startProgress);

    startProgress();

    return () => {
      clearInterval(timer);
      carousel.removeEventListener("slid.bs.carousel", startProgress);
    };
  }, []);

  const dashOffset =
    circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Carousel */}
      <div
        ref={carouselRef}
        id="hardwareSlider"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {[
            {
              img: "offer1.jpg",
              title: "Professional Power Tools",
              desc: "Heavy-duty equipment for builders & engineers"
            },
            {
              img: "offer2.jpg",
              title: "Trusted Hand Tools",
              desc: "Precision tools built for performance"
            },
            {
              img: "offer3.jpg",
              title: "Construction Essentials",
              desc: "Everything you need on-site"
            },
            {
              img: "offer4.jpg",
              title: "Safety Gear & Equipment",
              desc: "Protect what matters most"
            },
            {
              img: "offer5.jpg",
              title: "Industrial Grade Tools",
              desc: "Built for long-lasting durability"
            }
          ].map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                style={{
                  height: "clamp(260px, 45vw, 520px)",
                  backgroundImage: `linear-gradient(
                    to right,
                    rgba(0,0,0,0.75),
                    rgba(0,0,0,0.2)
                  ), url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8%"
                }}
              >
                <div style={{ maxWidth: "520px", color: "#fff" }}>
                  <h1
                    style={{
                      fontSize: "clamp(22px, 4vw, 42px)",
                      fontWeight: "800",
                      marginBottom: "12px"
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    style={{
                      fontSize: "clamp(14px, 2vw, 18px)",
                      marginBottom: "18px",
                      color: "#e5e7eb"
                    }}
                  >
                    {slide.desc}
                  </p>
                  <button
                    style={{
                      padding: "10px 22px",
                      background: "#f97316",
                      border: "none",
                      color: "#fff",
                      fontWeight: "600",
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hardwareSlider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hardwareSlider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Circular Timer */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          width: "46px",
          height: "46px"
        }}
      >
        <svg width="46" height="46">
          <circle
            cx="23"
            cy="23"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="4"
          />
          <circle
            cx="23"
            cy="23"
            r={radius}
            fill="none"
            stroke="#f97316"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.03s linear" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
