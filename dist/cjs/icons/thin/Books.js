var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Books_exports = {};
__export(Books_exports, {
  default: () => Books_default
});
module.exports = __toCommonJS(Books_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BooksThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.615 445.316L397.768 29.551C392.936 11.742 376.623 0 358.797 0C355.34 0 351.822 0.441 348.324 1.367L285.932 17.871C279.418 19.594 274.084 23.117 269.443 27.332C264.092 11.543 249.598 0 232 0H168C154.561 0 143.254 7.062 136 17.227C128.746 7.062 117.439 0 104 0H40C17.908 0 0 17.91 0 40V472C0 494.09 17.908 512 40 512H104C117.439 512 128.746 504.938 136 494.773C143.254 504.938 154.561 512 168 512H232C254.092 512 272 494.09 272 472V120.523L370.232 482.449C375.066 500.258 391.377 512 409.205 512C412.662 512 416.178 511.559 419.676 510.633L482.068 494.129C503.605 488.43 516.385 466.578 510.615 445.316ZM366.889 409.047L291.664 131.898L401.111 102.953L476.336 380.102L366.889 409.047ZM168 16H232C245.234 16 256 26.766 256 40V96H144V40C144 26.766 154.768 16 168 16ZM256 400H144V112H256V400ZM16 112H128V400H16V112ZM16 40C16 26.766 26.768 16 40 16H104C117.234 16 128 26.766 128 40V96H16V40ZM104 496H40C26.768 496 16 485.234 16 472V416H128V472C128 485.234 117.234 496 104 496ZM256 472C256 485.234 245.234 496 232 496H168C154.768 496 144 485.234 144 472V416H256V472ZM275.162 44.637C278.398 39.031 283.676 35.02 290.023 33.34L352.414 16.836C354.51 16.281 356.656 16 358.799 16C369.816 16 379.492 23.297 382.326 33.742L396.928 87.539L396.799 87.574V87.57L339.605 102.699L287.48 116.484L272.826 62.492C271.184 56.434 272.012 50.094 275.162 44.637ZM492.838 467.363C489.602 472.969 484.324 476.98 477.977 478.66L415.586 495.164C413.49 495.719 411.342 496 409.205 496C398.186 496 388.508 488.703 385.674 478.258L371.072 424.461L371.201 424.426V424.43L396.938 417.617L480.52 395.516L495.174 449.508C496.818 455.566 495.988 461.906 492.838 467.363Z" })
  }
));
BooksThin.displayName = "BooksThin";
var Books_default = BooksThin;
