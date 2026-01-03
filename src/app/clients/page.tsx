import ClientsHero from "@/components/ClientsHero"
import ClientsVisit from "@/components/ClientsVisit"
import ClientsUseful from "@/components/ClientsUseful"
import ClientsFaq from "@/components/ClientsFaq"

export default function ClientsPage() {
    return (
        <div>
            <ClientsHero />
            <ClientsVisit />
            <ClientsUseful />
            <ClientsFaq/>
        </div>
    )
}