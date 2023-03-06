import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Custom.module.css";
export default function Navbar() {
  return (
    <div>
      <div className="mx-12">
        <div className="flex justify-between w-100  mt-3">
          <Link href="/">
            <Image
              src={"/assets/img/Logo.png"}
              alt={"logo"}
              width={100}
              height={100}
            />
          </Link>
          <Link href="/about">
            <h6 className={styles.about}>About</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}
