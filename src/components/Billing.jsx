import { apple, bill, google } from "../assets"
import { layout, styles } from "../util/style"

const Billing = () => {
    return (
        <div id='product' className={layout.sectionRearse}>
            <div className={layout.sectionImageReverse}>
                <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5] " />
                {/* Gradient Background */}
                <div className='absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full top-0 white__gradient'></div>
                <div className='absolute z-[0] -left-1/2 w-[50%] h-[50%] rounded-full bottom-0 pink__gradient'></div>
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Hisob-kitob va fakturial <br className="sm:block hidden" /> osongina boshqaring
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, odio officia id voluptatem eveniet rerum aperiam asperiores pariatur illo a.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
                    <img src={apple} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Billing