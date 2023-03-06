import Image from "next/image";
import styles from "../styles/Custom.module.css";
import img from "../public/assets/img/Audio track.png";
import img2 from "../public/assets/img/Icon.png";
import img3 from "../public/assets/img/Cloud.png";
import img4 from "../public/assets/img/Lines.png";
import img5 from "../public/assets/img/Vector.png";
import imgperson from "../public/assets/img/photo-of-people-sitting-beside-table-3182755.png";
import imgperson2 from "../public/assets/img/1.png";
import imgperson3 from "../public/assets/img/3.png";
import imgperson4 from "../public/assets/img/card1.png";
import imgperson5 from "../public/assets/img/card2.png";
import episode from "../public/assets/img/Episode Icon.png";
import icon from "../public/assets/img/Icon (1).png";
import shape from "../public/assets/img/Shapes.png";
export default function Home() {
  return (
    <div>
      <div className="md:mx-40">
        <div
          className="md:flex justify-around items-center"
          style={{ height: 500 }}
        >
          <div>
            <h1 className="text-4xl font-bold w-80">
              Become The Hero Of Your Own Story
            </h1>
            <p className={`${styles.header_paragraph} mt-10`}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <form className={`${styles.search_wrapper} ${styles.cf}`}>
              <input
                type="text"
                placeholder="Enter your email..."
                required
                style={{ boxShadow: "none" }}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div>
            <Image
              src={img}
              priority
              alt={"audio track"}
              className={styles.audio_img}
            />
          </div>
        </div>
      </div>

      <div className="mt-64 md:mt-16 my-24 md:mx-64">
        <div>
          <div className="justify-between mt-16 my-24 md:flex">
            <h1 className="font-bold md:text-start text-center">
              Podcast Available On
            </h1>

            <div className="flex">
              <Image src={img2} alt="apple" />
              <h1 className="ml-2 font-semibold">Apple Podcast</h1>
            </div>

            <div className="flex md:m-0 my-3">
              <Image src={img3} alt="Sound" />
              <h1 className="ml-2 font-bold">Sound Cloud </h1>
            </div>
            <div className="flex">
              <Image src={img4} alt="Sound" />
              <h1 className="ml-2 font-semibold">Google Podcast</h1>
            </div>
            <div className="flex  md:m-0 my-3">
              <Image src={img5} alt="Sound" />
              <h1 className="ml-2 font-bold">Spotify</h1>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Recent Episodes</h1>
            <p className={`${styles.header_paragraph} mt-5 w-96`}>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>
          <div>
            <button className={`${styles.about_btn} mt-5`}>
              See All Episiodes
            </button>
          </div>
        </div>
        {/* first card grid */}
        <div className="mt-32 ">
          <div className={`md:grid md:grid-cols-3 gap-2 ${styles.card}`}>
            <div
              style={{
                backgroundImage: `url(/assets/img/photo-of-people-sitting-beside-table-3182755.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                // height: "100vh",
              }}
            >
              <div className="h-72">
                <Image
                  src={episode}
                  alt="episode"
                  className={`float-right ${styles.episode}`}
                />
              </div>
              <div className={styles.person_text}>
                <h1 className="text-2xl font-bold mt-5">
                  Ep 1: How to build a world-class business brand
                </h1>

                <p className={`mt-5 ${styles.index_header_paragraph} `}>
                  Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                  rebum.
                </p>
              </div>
              <div className="flex mb-3">
                <Image src={icon} alt={"icon"} />
                <p className={styles.listen}>Listen Now</p>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(/assets/img/1.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                // height: "100vh",
              }}
            >
              <div className="h-72">
                <Image
                  src={episode}
                  alt="episode"
                  className={`float-right ${styles.episode}`}
                />
              </div>
              <div className={styles.person_text}>
                <h1 className="text-2xl font-bold mt-5">
                  Ep 2: Getting the first 100 customers for your business
                </h1>

                <p className={`mt-5 ${styles.index_header_paragraph} `}>
                  Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                  rebum.
                </p>
              </div>
              <div className="flex mb-3">
                <Image src={icon} alt={"icon"} />
                <p className={styles.listen}>Listen Now</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(/assets/img/3.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                // height: "100vh",
              }}
            >
              <div className="h-72">
                <Image
                  src={episode}
                  alt="episode"
                  className={`float-right ${styles.episode}`}
                />
              </div>
              <div className={styles.person_text}>
                <h1 className="text-2xl font-bold mt-5">
                  Ep 3: Should I raise money for my startup, or not?
                </h1>

                <p className={`mt-5 ${styles.index_header_paragraph} `}>
                  Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                  rebum.
                </p>
              </div>
              <div className="flex mb-3">
                <Image src={icon} alt={"icon"} />
                <p className={styles.listen}>Listen Now</p>
              </div>
            </div>
          </div>
        </div>
        {/* second card grid */}
        <div className="mt-32">
          <div className="md:grid grid-cols-3 gap-1">
            <div className={` ${styles.card_shape}`}>
              <div
                style={{
                  backgroundImage: `url(/assets/img/Shapes.png)`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100vh",
                }}
              >
                <div className="p-3">
                  <div className={styles.person_text2}>
                    <h1 className="text-2xl font-bold mt-5">
                      Read our articles & news
                    </h1>
                  </div>
                  <p className={styles.listen}>See More</p>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(/assets/img/card1.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                // height: "100vh",
              }}
            >
              <div className="h-80">
                <Image
                  src={episode}
                  alt="episode"
                  className={`float-right ${styles.episode}`}
                />
              </div>
              <div className={styles.person_text}>
                <h1 className="text-2xl font-bold mt-12">
                  Getting the first 100 customers for your business
                </h1>

                <p className={`mt-5 ${styles.index_header_paragraph} `}>
                  Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                  rebum.
                </p>
              </div>

              <p className={styles.read}>Read Now </p>
            </div>
            <div
              style={{
                backgroundImage: `url(/assets/img/card2.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                // height: "100vh",
              }}
            >
              <div className="h-80">
                <Image
                  src={episode}
                  alt="episode"
                  className={`float-right ${styles.episode}`}
                />
              </div>
              <div className={styles.person_text}>
                <h1 className="text-2xl font-bold mt-12">
                  Apparently we had reached a great height in the atmosphere,
                  ...
                </h1>

                <p className={`mt-5 ${styles.index_header_paragraph} `}>
                  Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                  rebum.
                </p>
              </div>
              <p className={styles.read}>Read Now </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
