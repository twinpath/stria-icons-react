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
var Store_exports = {};
__export(Store_exports, {
  default: () => Store_default
});
module.exports = __toCommonJS(Store_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StoreDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.094 218.666V464C512.094 490.51 490.604 512 464.094 512H112C85.49 512 64 490.51 64 464V218.709C69.143 220.68 74.443 222.424 80.262 223.207C84.236 223.727 88.293 224 92.35 224C105.09 224 117.078 221.213 127.906 216.406V384H448V216.42C458.816 221.217 470.768 224 483.451 224C487.592 224 491.566 223.727 495.541 223.207C501.463 222.422 506.869 220.676 512.094 218.666Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.542 223.207C491.567 223.727 487.592 224 483.452 224C457.397 224 434.241 212.621 418.26 195.031C402.362 212.621 379.233 224 353.067 224C327.012 224 303.799 212.621 287.901 195.031C272.005 212.621 248.846 224 222.71 224C196.653 224 173.442 212.621 157.544 195.031C141.645 212.621 118.489 224 92.35 224C88.294 224 84.237 223.727 80.262 223.207C24.95 215.766 -1.271 150.637 28.317 103.807L85.645 13.129C90.751 4.978 99.858 0 109.575 0H466.395C476.11 0 485.219 4.978 490.325 13.129L547.651 103.807C577.321 150.719 551.018 215.848 495.542 223.207Z" })
    ]
  }
));
StoreDuotone.displayName = "StoreDuotone";
var Store_default = StoreDuotone;
