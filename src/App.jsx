import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import PaperSubmission from "./pages/PaperSubmission";
import ImportantDates from "./pages/ImportantDates";
import PaperReview from "./pages/PaperReview";
import PaperRegistration from "./pages/PaperRegistration";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Committees from "./pages/Committees";
import Venue from "./pages/Venue";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/paper-review" element={<PaperReview />} />
          <Route path="/paper-registration" element={<PaperRegistration />} />
          <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/venue" element={<Venue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
