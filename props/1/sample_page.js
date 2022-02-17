import React from "react";
import ReactDOM from "react-dom";

function Page(props) {
    return(
        <div>
            <h2>
                hii Hareesh
            </h2>
            <h1>
                niku oka {props.com} vacheesimdooch
            </h1>

        </div>
    );
}
const co =  <Page com= " component " />;

ReactDOM.render(co, document.getElementById('root'));
export default Page;
