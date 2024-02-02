import { logo } from "../assets"
import { footerLinks } from "../util/constants"
import { styles } from "../util/style"

const Footer = () => {
    return (
        <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex-col justify-start mr-10">
                    <img src={logo} alt="logo" className="w-[250px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} mt-5 max-w-[350px]`}>
                        To'lovlarni oson, ishochli va xafsiz qilish yangi usuli.
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map(link => (
                        <div key={link.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white'>{link.title}</h4>
                            <ul className="list-none mt-4">
                                {link.links.map((item) => {
                                    <li key={item.name} className='font-montserrat font-normal text-[16px] leading-[24px] text-white hover:text-secoundary cursor-pointer'>{item.name}</li>
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Footer