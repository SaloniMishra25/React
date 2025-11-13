export default function Form() {
  return (
    <form onSubmit={handleFromSubmit}>
      <input type="text" placeholder="Write something........." />
      <button>Submit</button>
    </form>
  );
}

function handleFromSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}
