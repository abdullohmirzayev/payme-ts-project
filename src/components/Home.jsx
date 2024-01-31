import { styles } from "../util/style"

const Home = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/* Information */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                {/* Discount information */}
                <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
                    <p className={`${styles.paragraph}`}>
                        <span className="text-white">20%</span> Chegirma <span className="text-white">1 oylik</span> xisob uchun</p>
                </div>
                {/* Title */}
                <div></div>

                {/* Description */}
                <div></div>
            </div>

            {/* Animation img */}
            <div className="">crver</div>
        </section>
    )
}

export default Home