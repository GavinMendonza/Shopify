import { AiFillHeart } from "react-icons/ai";

const Toast = ({ changeState }: any) => {
  return (
    <>
      <div
        id="toast-default"
        className="flex mt-3 items-center p-4  rounded-lg shadow text-gray-400 bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg bg-blue-800 text-blue-200">
          <AiFillHeart />
          <span className="sr-only">Heart Icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          Hey there! <br />
          This is a demo project and you cant buy any of this stuff... Thanks
          for showing interest in my project!!
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={() => changeState()}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              //   stroke="currentColor"
              //   stroke-linecap="round"
              //   stroke-linejoin="round"
              //   stroke-width="2"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Toast;
