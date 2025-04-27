import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { getPagination, pagination } from "../src/utilits";

const Blog = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);
  useEffect(() => {
    pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setState(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layout blog>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title text-center">
            <h3>Our Blogs</h3>
          </div>
          <div className="row">
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    <img src="static/img/blog-1.jpg" title="Design Truth Blog Post" alt="Design Truth Blog Post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      I Will Tell You The Truth About Design In The Next 60 Seconds.
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    <img src="static/img/blog-2.jpg" title="Design Technique Blog Post" alt="Design Technique Blog Post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    <img src="static/img/blog-3.jpg" title="Design Career Blog Post" alt="Design Career Blog Post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      Five Solid Evidences Attending Design Is Good For Your Career Development.
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    <img src="static/img/blog-6.jpg" title="Design Facts Blog Post" alt="Design Facts Blog Post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      10 Things You Most Likely {`Didn't`} Know About Design.
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    <img src="static/img/blog-5.jpg" title="Swimming Blog Post" alt="Swimming Blog Post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      Why swimming is also another important thing for man.
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-15px-tb blog-list-item">
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href="/single-blog">
                    <img src="static/img/blog-4.jpg" title="Design Knowledge Blog Post" alt="Design Knowledge Blog Post" />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                  <h6>
                    <Link href="/single-blog">
                      What You Know About Design And What You {`Don't`} Know About Design.
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 blog-pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${active == 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    disabled={active === 1}
                    onClick={() => setActive(active === 1 ? 1 : active - 1)}
                    aria-label="Previous page"
                  >
                    <i className="fas fa-chevron-left" />
                  </button>
                </li>
                {state.map((pageNum, i) => (
                  <li
                    key={i}
                    className={`page-item ${active === pageNum ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setActive(pageNum)}
                      aria-label={`Go to page ${pageNum}`}
                      aria-current={active === pageNum ? "page" : undefined}
                    >
                      {pageNum}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    active == state.length ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    disabled={active === state.length}
                    onClick={() =>
                      setActive(
                        active === state.length ? state.length : active + 1
                      )
                    }
                    aria-label="Next page"
                  >
                    <i className="fas fa-chevron-right" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
