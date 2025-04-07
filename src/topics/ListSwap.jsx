import { useState } from "react";

function ListSwap() {
  const [list1, setList1] = useState([
    { title: "Item A", checked: false },
    { title: "Item B", checked: false },
    { title: "Item C", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
  ]);
  function checkBoxChange(index) {
    let list = [...list1];
    list[index].checked = !list[index].checked;
    setList1([...list]);
  }
  function swapItems() {
    let listSwapped1 = [...list1];
    let listSwapped2 = [...list2];
    listSwapped1.forEach((val, index) => {
      console.log(val);

      if (val.checked) {
        [listSwapped1[index].title, listSwapped2[index].title] = [
          listSwapped2[index].title,
          listSwapped1[index].title,
        ];
        listSwapped1[index].checked = false;
      }
    });
    console.log(listSwapped1, listSwapped2);

    setList1([...listSwapped1]);
    setList2([...listSwapped2]);
  }
  return (
    <div>
      <div>
        <h2>List 1</h2>
        <ul>
          {list1.map((val, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={val.checked}
                onChange={() => checkBoxChange(index)}
              />
              {val.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>List 2</h2>
        {list2.map((val, index) => {
          return <li key={index}>{val.title}</li>;
        })}
      </div>
      <button onClick={swapItems}>Swap Items</button>
    </div>
  );
}

export default ListSwap;
