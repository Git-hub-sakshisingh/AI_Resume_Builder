import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ErrorPage from './ErrorPage'; // Assuming you have this component
import './Output.css'

const Output = ({ result }) => {
    const componentRef = useRef();

        const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: `${result?.fullName || 'Resume'}`,
        onAfterPrint: () => alert('Printed Successfully'),
    });

    // If result is not provided or it's an empty object, return the ErrorPage
    if (!result || Object.keys(result).length === 0) {
        return <ErrorPage />;
    }

    // Function to replace \n with <br/> for rendering multi-line content
    const replaceWithBr = (string) => {
        if (!string) return ''; // return empty string if no content is provided
        return string.replace(/\n/g, '<br/>');
    };

    return (
        <>
            <button onClick={handlePrint} style={{marginLeft:"50vw", marginTop:"20px"}}>Print Resume</button>
            <main className='container' ref={componentRef} style={{}}>
                <header className="header">
                    <div>
                        <h1>{result.fullName}</h1>
                        <p className='resumeTitle headerTitle'>
                            {result.currentPosition} ({result.currentSkills})
                        </p>
                        <p className="resumeTitle">
                            {result.currentLength} year(s) work experience
                        </p>
                    </div>
                    <div>
                        <img
                            src={result.image_url}
                            alt={result.fullName}
                            className='resumeImage'
                        />
                    </div>
                </header>
                <div className="resumeBody">
                    <div>
                        <section className="resumeSection">
                            <h2 className="sectionTitle">Profile Summary</h2>
                            {result.objective ? (
                                <p
                                    className="sectionContent"
                                    dangerouslySetInnerHTML={{
                                        __html: replaceWithBr(result.objective),
                                    }}
                                />
                            ) : (
                                <p>{result.currentSkills}</p>  // Fallback message if there's no objective
                            )}
                        </section>

                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>WORK HISTORY</h2>
                        {result.workHistory && result.workHistory.length > 0 ? (
                            result.workHistory.map((work, index) => (
                                <p className="resumeBodyContent" key={index}>
                                    <span style={{ fontWeight: "bold" }}>{work.name}</span> -{" "}
                                    {work.position}
                                </p>
                            ))
                        ) : (
                            <p>No work history available.</p>
                        )}
                    </div>
                    <div>
                        <h2 className="resumeBodyTitle">JOB PROFILE</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: replaceWithBr(result.jobResponsibilities),
                            }}
                            className='resumeBodyContent'
                        />
                    </div>
                    <div>
                        <h2 className="resumeBodyTitle">JOB RESPONSIBILITIES</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: replaceWithBr(result.keypoints),
                            }}
                            className='resumeBodyContent'
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Output;
