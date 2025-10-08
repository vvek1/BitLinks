
import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    const originalUrl = typeof body.url === "string" ? body.url.trim() : ""
    const shortCode = typeof body.shorturl === "string" ? body.shorturl.trim() : ""

    if (!originalUrl || !shortCode) {
        return Response.json({ success: false, error: true, message: 'URL and shorturl are required' }, { status: 400 })
    }

    try {
        // Basic URL validation (allows http/https)
        const parsed = new URL(originalUrl)
        if (!/^https?:$/.test(parsed.protocol)) {
            return Response.json({ success: false, error: true, message: 'Only http/https URLs are allowed' }, { status: 400 })
        }
    } catch {
        return Response.json({ success: false, error: true, message: 'Invalid URL format' }, { status: 400 })
    }

    // Restrict short code to safe characters
    if (!/^[a-zA-Z0-9-_]{3,32}$/.test(shortCode)) {
        return Response.json({ success: false, error: true, message: 'shorturl must be 3-32 chars: letters, numbers, - or _' }, { status: 400 })
    }

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: shortCode })
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }

    const result = await collection.insertOne({
        url: originalUrl,
        shorturl: shortCode
    })

    return Response.json({success: true, error: false,  message: 'URL Generated Successfully' })
  }