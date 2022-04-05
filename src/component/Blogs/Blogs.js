import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container d-flex flex-column align-items-center'>

            <div className=' p-4 mb-5 w-75 shadow rounded rounded-3'>
                <h4> &bull; What is Context API ?</h4>
                <p>Context API solves one big problem for React developers, prop drilling. Data transfer from component to component by passing props at every level is problematic. Context API gives us the freedom to pass data through our component trees and allows us the components to share data at different levels. Context API creates a central data hub and allows the components wrapped inside MyContext.Provider to access the data whenever needed without depending on props passing. To use the Context API data, the components just need to import it and they are good to go. The value attribute inside MyContext.Provider tag contains the accessible data. It can be string, array, state, function, object, etc. </p>
            </div>

            <div className=' p-4 w-75 shadow mb-5 rounded rounded-3'>
                <h4>  &bull; Semantic Tags</h4>
                <p>Sematic tags were introduced in HTML5. Semantic tags describe their job clearly with their name. Semantic tags make code easier to read for both developers and search engines. Before HTML5 people mostly had to use div to create a section, but now there is an individual tag named section. The Header and Footer tags were also introduced as semantic tags and they describe their purpose. Some of the semantic tags are <code>  header article section table  footer aside main nav  </code> etc .    </p>
            </div>
        </div>
    );
};

export default Blogs;