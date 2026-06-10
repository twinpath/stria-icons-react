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
const StoreLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.141 256H495.954C487.143 256 480.001 263.143 480.001 271.953V352H95.907V271.953C95.907 263.143 88.764 256 79.954 256S64.001 263.143 64.001 271.953V464C64.001 490.51 85.491 512 112.001 512H464.094C490.604 512 512.094 490.51 512.094 464V271.953C512.094 263.143 504.952 256 496.141 256ZM480.094 464C480.094 472.822 472.917 480 464.094 480H112.001C103.178 480 96.001 472.822 96.001 464V384H480.094V464ZM547.651 103.807L490.325 13.129C485.219 4.979 476.11 0 466.395 0H109.575C99.858 0 90.751 4.979 85.645 13.129L28.317 103.807C-1.271 150.637 24.95 215.766 80.262 223.207C84.237 223.727 88.294 224 92.35 224C118.489 224 141.645 212.621 157.544 195.031C173.442 212.621 196.653 224 222.71 224C248.846 224 272.005 212.621 287.901 195.031C303.799 212.621 327.012 224 353.067 224C379.233 224 402.362 212.621 418.26 195.031C434.241 212.621 457.397 224 483.452 224C487.592 224 491.567 223.727 495.542 223.207C551.018 215.848 577.321 150.719 547.651 103.807ZM523.376 167.391C519.68 175.291 510.604 188.928 491.393 191.477C488.782 191.818 486.172 192 483.452 192C467.516 192 452.776 185.434 441.946 173.514L418.2 147.375L394.52 173.574C383.78 185.455 369.059 192 353.067 192C337.325 192 322.225 185.283 311.641 173.574L287.899 147.307L264.159 173.574C253.422 185.457 238.702 192 222.71 192C206.967 192 191.868 185.283 181.284 173.574L157.544 147.309L133.803 173.574C123.063 185.455 108.342 192 92.35 192C89.686 192 87.022 191.818 84.53 191.492C65.358 188.914 56.311 175.283 52.626 167.387C45.54 152.211 46.567 134.832 55.364 120.906L111.573 32H464.397L520.606 120.912C529.428 134.859 530.463 152.236 523.376 167.391Z" })
  }
));
StoreLight.displayName = "StoreLight";
var Store_default = StoreLight;
