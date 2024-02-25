import React from "react";
import "./Exercise3.css";

class Exercise extends React.Component{

    render(){

        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };

        return <div>
            <h1 className="App-header" style={style_header}>
                This is a header</h1>
            <p className="para"> This is a paragraph</p>
            <a href='google.com'>This is a link</a>
            <h3> This is a Form:</h3>
            <form>
                <label> Enter your name</label> <br/>
                <input type="text" name="name"  />
                <input type="submit" value="Submit" />
                </form>
                <h4> This is an image:</h4>
                <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg" alt="image" />

                <ul> <p> This is a list:</p>
                    <li> Item 1</li>
                    <li> Item 2</li>
                    <li> Item 3</li>
                    <li> Item 4</li>
                
                </ul>


            </div>


    }


}

export default Exercise;