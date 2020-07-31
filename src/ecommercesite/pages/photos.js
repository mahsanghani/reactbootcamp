import React, {useContext} from "react"

import Image from "../components/image"
import {Context} from "../cartcontext"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    console.log(allPhotos)
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos
