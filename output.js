function H1({
  children
}) {
  return /*#__PURE__*/React.createElement("h1", null, children);
}
export default function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, null, "Hello"), /*#__PURE__*/React.createElement("ul", {
    className: "my-cool-list"
  }, /*#__PURE__*/React.createElement("li", null, "Hello"), /*#__PURE__*/React.createElement("li", null, "world")), /*#__PURE__*/React.createElement("form", {
    action: ""
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "first_name"
  }, "First Name"), /*#__PURE__*/React.createElement("input", {
    id: "first_name",
    type: "text"
  }), /*#__PURE__*/React.createElement("button", null, "Submit")));
}
