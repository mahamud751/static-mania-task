import Image from "next/image";
import React from "react";
import styles from "../../styles/Custom.module.css";
const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div className="md:mx-12">
            <div className={styles.sponsors}>
              <div>
                <h1 className="text-white text-center text-4xl font-bold pt-16">
                  Our Sponsors
                </h1>
                <div>
                  <div className="md:grid md:grid-cols-5 grid grid-cols-3 mt-16 md:mx-24">
                    <div className="flex">
                      <img src={"/assets/img/Logo (1).png"} alt="" />
                    </div>
                    <div className="flex">
                      <img src={"/assets/img/Logo (2).png"} alt="" />
                    </div>
                    <div className="flex">
                      <img src={"/assets/img/Vector (7).png"} alt="" />

                      <p className="font-bold text-white">logoipsum</p>
                    </div>
                    <div className="flex my-5 md:my-0">
                      <img src={"/assets/img/Vector (4).png"} alt="" />
                      <p className="font-bold text-white">logoipsum</p>
                    </div>
                    <div className="flex my-5 md:my-0">
                      <img src={"/assets/img/Vector (5).png"} alt="" />
                      <p className="font-bold text-white">logoipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main_footer}`} style={{ marginTop: -60 }}>
            <div className="flex justify-between md:mx-24">
              <div className="mt-24">
                <Image
                  src={"/assets/img/Logo2.png"}
                  alt={"logo"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-24">
                <p style={{ fontSize: 20 }}>Pages</p>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Podcast</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Host</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="mt-24">
                <p style={{ fontSize: 20 }}>Reach Us</p>
                <ul>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">About</a>
                  </li>
                </ul>
              </div>
              <div className="mt-24">
                <p style={{ fontSize: 20 }}>Subscribe</p>
                <ul>
                  <li>
                    <a href="" className="flex">
                      <img
                        src="/assets/img/Icon.png"
                        alt=""
                        className="mr-3"
                        style={{ width: 30 }}
                      />{" "}
                      <span>Apple Podcast</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex">
                      <img
                        src="/assets/img/Lines.png"
                        alt=""
                        className="mr-3"
                      />{" "}
                      <span>Google Podcast</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex">
                      <img
                        src="/assets/img/Cloud.png"
                        alt=""
                        className="mr-3"
                      />{" "}
                      <span>Soundcloud</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex">
                      <img
                        src="/assets/img/Vector.png"
                        alt=""
                        className="mr-3"
                      />{" "}
                      <span>Spotify</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ background: "#503AE7" }}>
            <p className="text-center text-white py-3">
              © Copyright Finsweet 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
