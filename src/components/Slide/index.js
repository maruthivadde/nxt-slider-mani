import { Component } from "react";
import "./index.css";
import SlideContext from "../../Context";

class Slide extends Component {
  state = { headingActive: true, descriptionActive: true };

  onClickHeading = () => {
    this.setState({ headingActive: false });
  };

  onClickDescription = () => {
    this.setState({ descriptionActive: false });
  };

  render() {
    const { headingActive, descriptionActive } = this.state;
    return (
      <SlideContext.Consumer>
        {(value) => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            ChangeDescription,
          } = value;

          const onBlurDescription = (event) => {
            if (event.target.value === "") {
              ChangeDescription("Description");
            }
            this.setState({ descriptionActive: true });
          };

          const onBlurHeading = (event) => {
            if (event.target.value === "") {
              changeHeading("Heading");
            }
            this.setState({ headingActive: true });
          };

          const onChangeHeading = (event) => {
            changeHeading(event.target.value);
          };

          const onChangeDescription = (event) => {
            ChangeDescription(event.target.value);
          };

          const tabDetails = initialList[activeIndex];
          const { description, heading } = tabDetails;

          return (
            <div className="sliding-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1
                    onClick={this.onClickHeading}
                    className="slide-heading-value"
                  >
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="slide-input-value"
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="slide-description-value"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    className="slide-description-input-value"
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          );
        }}
      </SlideContext.Consumer>
    );
  }
}

export default Slide;
