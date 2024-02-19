import { v4 as uuidv4 } from "uuid";
import "./index.css";
import SlideContext from "../../Context";

const NewButton = () => (
  <SlideContext.Consumer>
    {(value) => {
      const { addNewItem, activeIndex, changeActiveTab } = value;

      const onClickAddNewButton = () => {
        const id = uuidv4();
        const item = {
          id,
          heading: "Heading",
          description: "Description",
        };
        addNewItem(item);
        changeActiveTab(activeIndex + 1);
      };

      const onDoubleClickAddBtn = () => {
        console.log("Hi");
      };

      return (
        <div>
          <button
            type="button"
            className="add-new-slider-btn"
            onClick={onClickAddNewButton}
            onDoubleClick={onDoubleClickAddBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon-btn"
            />
            New
          </button>
        </div>
      );
    }}
  </SlideContext.Consumer>
);
export default NewButton;
