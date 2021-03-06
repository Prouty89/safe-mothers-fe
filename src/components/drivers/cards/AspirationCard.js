import React from 'react';
import {yesNoIDN} from "../form/driver-utils";
import {Card} from "../../reusableParts/accordion/content/content-style";

export default function AspirationCard({driver}) {
    return (
        <Card>
            <div className="card-content">
                    <ul className="fields">
                        <li>Marital Status:</li>
                        <li>Number of Children:</li>
                        <li>Children Details:</li>
                        <li>Driver Inspiration:</li>
                        <li>Dream for Future:</li>
                        <li>Deliver Story:</li>
                    
                    </ul>
                    <ul className="values over-flow">
                        <li>{yesNoIDN(driver.married)}</li>
                        <li>{driver.number_kids ? driver.number_kids : 'N/A'}</li>
                        <li>{driver.kid_info ? driver.kid_info : 'N/A'}</li>
                        <li>{driver.motivation ? driver.motivation : 'N/A'}</li>
                        <li>{driver.dream ? driver.dream : 'N/A'}</li>
                        <li>{driver.story ? driver.story : 'N/A'}</li>
                    </ul>
            </div>
        </Card>
    )
}