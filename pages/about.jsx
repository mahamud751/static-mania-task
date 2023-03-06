import styles from "../styles/Custom.module.css";

export default function About() {
  return (
    <div className="mx-24 ">
      <div className="flex  justify-start items-center" style={{ height: 700 }}>
        <div>
          <h1 className="text-4xl font-bold w-80">About Finsweet Podcast</h1>
          <p className={`${styles.header_paragraph} mt-10`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button className={`${styles.about_btn} mt-5`}>Subscribe Now!</button>
        </div>
      </div>
    </div>
  );
}
