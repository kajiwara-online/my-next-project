import styles from "./page.module.css";
import Image from "next/image";

import ButtonLink from "@/app/_compotents/ButtonLink";
const name = "世界";
export default function Home() {
  return (
    <section>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです
        </p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
      <div className="styles.newsLink">
        <ButtonLink href="/news">もっとみる</ButtonLink>
      </div>
    </section>
  );
}
