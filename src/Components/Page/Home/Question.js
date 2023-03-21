import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-[#ffc000] lg:mr-3 lg:ml-3 text-3xl mt-10 mb-5'>Questions maybe circling in your mind:</h1>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title  font-medium">
                    <li>
                        <a className='underline' href="/">Yellow therapist reminds me of yellow journalists, why yellow?</a>
                    </li>
                </div>
                <div className="collapse-content">
                    <p className='text-sm'>As you could guess, we get that a lot. But we chose yellow because yellow is famously the happiest color, yellow is the symbol of happiness. So the therapists work here are yellow therapists in the best possible way, far from yellow journalists. So, no worries. Let's spread happiness.  </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title  font-medium">
                    <li>
                        <a className='underline' href="/">This web design makes me sad, why is it so dull? Or, I don't like the design. Or, did you not pay your web designer?</a>
                    </li>
                </div>
                <div className="collapse-content">
                    <p className='text-sm'>We are really sorry that you felt that way. But to assure you, this is not our final design. We tend to bring the platform to the public as fast as possible, so we had no choice but to find perfection in the imperfect, just for now. And we are working relentlessly to make the platform better and better. Thanks for being with us.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title  font-medium">
                    <li>
                        <a className='underline' href="/">Wait a minute, who are you people?</a>
                    </li>
                </div>
                <div className="collapse-content">
                    <a href="http://asd">Click here</a>
                    <img src="https://images.theyellowtherapist.com/gifs/who_are_you.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Question;