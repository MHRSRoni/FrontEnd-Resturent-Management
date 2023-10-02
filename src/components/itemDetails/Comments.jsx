import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <div>
      <div className="mb-10">
        <form>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Creates comment
          </label>
          <input
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"
            type="text"
            placeholder="Write your comment here..."
          />
        </form>
      </div>
      <div>
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  );
};

export default Comments;
