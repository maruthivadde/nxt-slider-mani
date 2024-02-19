import { Component } from "react";
import "./index.css";
import SliderContext from "../../Context";

class SlideListItem extends Component {
  render() {
    const { details, serialNumber } = this.props;
    const { heading, description } = details;

    return (
      <SliderContext.Consumer>
        {(value) => {
          const { changeActiveTab, activeIndex } = value;
          const isActive = activeIndex === serialNumber - 1;
          const activeStylingValue = isActive ? "active-styling-value" : "";

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1);
          };

          return (
            <li
              className={`slide-list-value ${activeStylingValue}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-num-val">{serialNumber}</p>
              <div className="slide-tab-container">
                <h1 className="slide-tab-heading">{heading}</h1>
                <p className="slide-tab-description">{description}</p>
              </div>
            </li>
          );
        }}
      </SliderContext.Consumer>
    );
  }
}

export default SlideListItem;
