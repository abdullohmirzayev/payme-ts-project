import { features } from "../util/constants"
import { layout, styles } from "../util/style"
import Button from "./button"

const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2}`}>
                    Biznes rivojlantiring, <br className="sm:block hidden" /> pulni biz hal qilamiz.
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsum. Praesentium ullam commodi deserunt officiis nesciunt saepe quaerat cumque.
                </p>
                <Button styles={'mt-10'} />
            </div>
            <div className={`${layout.sectionImage} flex-col`}>
                {/* {features.map((feature) => (

                ))} */}
            </div>
        </section>
    )
}

export default Business