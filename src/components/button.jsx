
const Button = ({styles}) => {
    return (
        <div>
            <button type="button" className={`py-3 px-6 font-montserrat font-medium text=[18px] bg-blue-gradient cursor-pointer rounded-[10px] outline-none ${styles}`}>
                Boshlash
            </button>
        </div>
    )
}

export default Button