import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./Blogs.css";
const Blogs = ({ theme, toggleTheme }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./Data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //slider responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container" id="blogs">
      <h2 className="mb-5"> Responsive </h2>
      <Carousel
        showDots={true}
        infinite={true}
        className="mb-5 mx-auto "
        responsive={responsive}
      >
        {blogs.map((blog) => {
          const { id, name, link, detail, image } = blog;
          return (
            <div
              className="card  h-100 mx-4 rounded border-top bg-blog"
              key={id}
            >
              <img
                style={{ height: "13rem", objectFit: "cover" }}
                src={image}
                className="card-img-top rounded img-fluid"
                alt="..."
              />
              <div className="card-body mt-3 d-flex flex-column">
                <h5 className="card-title title">{name}</h5>
                <p className="blog-desc">{detail.slice(0, 250)} ...</p>
                <a
                  href={link}
                  target="_blank"
                  className="mt-auto align-self-start"
                >
                  <i className="ri-medium-fill blog-link "></i>
                </a>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Blogs;
