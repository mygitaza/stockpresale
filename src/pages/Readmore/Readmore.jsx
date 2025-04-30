import React from 'react'
import './Readmore.css'

const Readmore = () => {
  return (
    <div className='readmore' id='readmore'>
        <p>MODE Inc is an engineering, manufacturing and production company utilizing state of the art industrial technologies. We apply innovative manufacturing concepts rapidly while establishing long standing partnerships. Our customer base has become largely divers with design, engineering and full production services for large scale OEM corporations and smaller industries alike.</p>
        <p>
        Mode’s Ai-powered platform redefines building data and energy management by consolidating data from all building systems into one intelligent solution.</p>
        <div className="readmoreIndent">
        <p>With the MODE AI Assistant, building managers can:</p>
            <ul className='readmore-list'>
                <li>Analyze utility data to identify inefficiencies and save up to 20% on energy costs.</li>
                <li>Automate repetitive tasks, freeing up time for strategic decisions.</li>
                <li>Optimize building systems to enhance performance and occupant comfort.</li>
            </ul>
        </div>
        <div className="readmoreIndent">
            <p>What sets MODE AI apart:</p>
            <ul className='readmore-list'>
                <li>Seamless Integration: Works with your existing infrastructure, reducing downtime and complexity.</li>
                <li>Scalable Architecture: Future-proofs your building operations with flexibility to adapt to new technologies.</li>
                <li>Proven Impact: Achieve measurable cost savings, operational efficiency and sustainability compliance results.</li>
            </ul>
        </div>
        <p>MODE AI delivers actionable insights and transformative value, empowering building owners and managers to drive efficiency and cost savings and achieve sustainability goals.</p>
        <p>Connect with our team at the San Fransisco Bay and Tokyo Offices.</p>
        <p>Industry: Software Development <br />

            Company size: 51 - 200 employees <br />

            Headquarters: San Mateo, California <br />

            Type: Privately Held <br />

            Founded: 2014 <br />

            Specialties: IoT, Smart devices, Cloud services, PaaS, Sensor, Data, Automation, AI, AI assistance, building management, Energy management and construction management.</p>
    </div>
  )
}

export default Readmore