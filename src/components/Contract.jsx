import { card } from "../assets"
import { layout, styles } from "../util/style"
import Button from "./button"

const Contract = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Bir necha oson qadamda <br className="sm:block hidden" /> Kontrakt tuzish
                </h2>
                <p className={`${styles.paragraph} max-w-[560px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae at, totam exercitationem dolorum quisquam iure itaque quasi? Optio, dolorem repellat.
                </p>
                <Button styles={'mt-10'} />
            </div>
            <div className={layout.sectionImage}>
            <img src={card} alt="card" className="w-[100%] h-[100%]" />
            
            </div>
        </section>
    )
}

export default Contract