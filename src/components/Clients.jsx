import { clients } from "../util/constants"
import { styles } from "../util/style"
import ClientCard from "./clientCard"

const Clients = () => {
    return (
        <div className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap`}>
                {clients.map(client => (
                    <ClientCard key={client.id} logo={client.logo} />
                ))}
            </div>
        </div>
    )
}

export default Clients