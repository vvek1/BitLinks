import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = params?.shorturl

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // If no shorturl was provided, send to host/home
    if(!shorturl){
        const fallback = process.env.NEXT_PUBLIC_HOST || "/"
        redirect(fallback)
    }

    const doc = await collection.findOne({ shorturl })

    if (doc?.url) {
        redirect(doc.url)
    }

    const fallback = process.env.NEXT_PUBLIC_HOST || "/"
    redirect(fallback)
}