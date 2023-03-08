import { Routes, Route } from "react-router-dom";
import About from "./About";
import Landing from "./Landing";
import Contact from "./Contact";
function LinkTree() {
    return (
        <div>
            <Routes>
                <Route path="landing" element={<Landing />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default LinkTree;
