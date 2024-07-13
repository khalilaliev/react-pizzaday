import { INPUT_TEXT } from "../../constants/input-text";
import { DESCRIPTION } from "../../constants/main-text";
import Input from "../Input/Input";

const Main = () => {
  return (
    <>
      <main>
        <h1 className="text-3xl mb-5 text-custom-gray  font-mono">
          {DESCRIPTION.HEAD}
          <br />
          <span className="text-bg-color  font-mono">
            {DESCRIPTION.SUB_TITLE}
          </span>
        </h1>
        <p className="text-custom-gray  mb-6 font-mono">
          {DESCRIPTION.GREETING}
        </p>
        <div className="flex justify-center gap-3">
          <Input showButton={true} placeholder={INPUT_TEXT.LOGIN} />
        </div>
      </main>
    </>
  );
};

export default Main;
