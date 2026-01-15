import ClientsHero from "@/components/ClientsHero"
import ClientsVisit from "@/components/ClientsVisit"
import ClientsPlan from "@/components/ClientsPlan"
import ClientsUseful from "@/components/ClientsUseful"
import ClientsFaq from "@/components/ClientsFaq"

export default function ClientsPage() {
    return (
        <div>
            <ClientsHero />
            <ClientsVisit />
            <ClientsPlan />
            <ClientsUseful />
            <ClientsFaq/>
        </div>
    )
}