import React from 'react'

export const stage = {
    Nabitende_Stage: 1,
    Bugongo_Stage: 2,
    Nawandala_Stage: 3,
    Namusiisi_Stage: 4,
    Itanda_Stage: 5,
    Other: 98
};

export default function Stage(props) {
    return (
        <>
            <option value=""> </option>
            <option value={stage.Nabitende_Stage}>Nawwandala</option>
            <option value={stage.Bugongo_Stage}>Makuutu</option>
            <option value={stage.Bugongo_Stage}>Makuutu</option>
            <option value={stage.Bugongo_Stage}>Makuutu</option>
            <option value={stage.Bugongo_Stage}>Makuutu</option>
            <option value={subcounty.Other}>Other</option>
        </>
    )
}