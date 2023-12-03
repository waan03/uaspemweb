

export default async function Page() {
    // This request should be cached until manually invalidated.
    // Similar to `getStaticProps`.
    // `force-cache` is the default and can be omitted.
    const staticData = await fetch(`https://api.jikan.moe/v4/anime/{id}/full`)
    
    console.log()
}
   