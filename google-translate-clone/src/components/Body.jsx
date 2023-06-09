import FeedbackLink from "./FeedbackLink";
import ForTextTab from "./ForTextTab";
import SelectLanguage from "./SelectLanguage";

const Body = () => {
  return (
    <>
      <div className="w-11/12 flex justify-between mx-auto mt-4 h-12 px-8">
        <SelectLanguage />
      </div>

      <ForTextTab />
      <FeedbackLink />
    </>
  );
};

export default Body;
