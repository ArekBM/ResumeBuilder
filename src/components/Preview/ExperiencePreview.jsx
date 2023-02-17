import React from 'react'

export default function ExperienceItemPreview({experienceItem}){
    return(
        <section>
            <title>
                {experienceItem.position}
            </title>
            <section>
                <h2>{experienceItem.startDate} - {experienceItem.endDate}</h2>
                <div>
                    {experienceItem.company}, {experienceItem.city}
                </div>
            </section>
        </section>
    )
}