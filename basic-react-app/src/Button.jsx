function handleClick(event) {
  console.log("Hello");
  console.log(event);
}
function handleMouseOver() {
  console.log("Bye!");
}
function handleDblClick() {
  console.log("You double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Say Hello!</button>
      <p>this para is for event demo</p>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iure
        cumque amet nesciunt quam molestiae dolore ut porro soluta eum
        dignissimos in itaque quas sit vero excepturi sequi, asperiores repellat
        cum natus blanditiis accusamus ipsam aut id. Consequatur laudantium
        mollitia eveniet expedita excepturi illum repellendus magni, qui
        voluptate facilis, autem magnam, ipsam incidunt porro possimus nihil non
        quia vel dolore quod numquam! Et facere voluptatibus blanditiis nulla
        quibusdam fugiat architecto, recusandae, animi minus corrupti
        consequatur enim, alias ratione. Aut nihil iure sit, corrupti obcaecati
        quidem incidunt, vero consequatur tempora suscipit, expedita laboriosam
        necessitatibus dolorem ipsam illo dicta dignissimos eos facere?
      </p>
      <button onDoubleClick={handleDblClick}>Double Click me!</button>
    </div>
  );
}
