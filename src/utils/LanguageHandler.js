let languageFallback = 'sv'
export const setLanguageFallback = (v) => languageFallback = v

export async function t(langFile) {
    if (!langFile) return

    const fallback = await fetch(`lang/${languageFallback}/${langFile}.json`)
        .then(res => res.json())
        .catch((err) => {
            if (err instanceof SyntaxError) {
                // TODO: varna om att sökvägen för fallback-språket är fel
            }
        })

    const currentLang = await fetch(`lang/${document.documentElement.lang}/${langFile}.json`)
        .then(res => res.json())
        .catch(err => {
            if (err instanceof SyntaxError) {
                // TODO: varna om att sökvägen för valda språket är fel
            }
        })

    for (const phrase in fallback) {
        if (!(phrase in currentLang)) currentLang[phrase] = fallback[phrase]
    }

    const handler = {
        get: (object, property) => {
            return property in object ? object[property] : `[${langFile}.${property}]`
        }
    }

    return new Proxy(currentLang, handler)
}
