import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import DIRECTORY_DATA from "./directory.data";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: DIRECTORY_DATA
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size, linkUrl  }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
