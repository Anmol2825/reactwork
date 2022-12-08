import React from "react";
import {Link } from "react-router-dom";

    function Page1() {

        return (
          <div>
            <form>
                <label>
                    Area he visited for marketing Yesterday
                    <br></br>
                    <input type="text" name="name" />
                </label>
                <br></br>
                <input type="submit" value="NextPage" Link to="/Page2" />
                </form>
            {/* <Link to="/Page2"><button>
              Go to Page 2 
            </button>
            </Link> */}
          </div>
        );

    }

    export default Page1;
