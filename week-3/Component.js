

class Component {

  constructor(title, author, text) {
    this.props = {};
    this.props.title = title;
    this.props.author = author;
    this.props.text = text;
  }

  render() {
    return `
      <Article>
        <h1>${this.props.title}</h1>
        <span>${this.props.author}</span>
        <div>${this.props.text}</div>
      </Article>`;
  }

}

export default Component;