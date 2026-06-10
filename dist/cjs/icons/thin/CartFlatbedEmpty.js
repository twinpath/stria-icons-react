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
var CartFlatbedEmpty_exports = {};
__export(CartFlatbedEmpty_exports, {
  default: () => CartFlatbedEmpty_default
});
module.exports = __toCommonJS(CartFlatbedEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedEmptyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 416H128V72C128 29.594 101.688 0 64 0H8C3.594 0 0 3.594 0 8S3.594 16 8 16H64C97.156 16 112 44.125 112 72V424C112 428.406 115.594 432 120 432H172.461C164.797 440.506 160 451.65 160 464C160 490.51 181.492 512 208 512S256 490.51 256 464C256 451.65 251.203 440.506 243.543 432H460.461C452.797 440.506 448 451.65 448 464C448 490.51 469.492 512 496 512S544 490.51 544 464C544 451.65 539.203 440.506 531.543 432H632C636.406 432 640 428.406 640 424S636.406 416 632 416ZM240 464C240 481.645 225.645 496 208 496S176 481.645 176 464S190.355 432 208 432S240 446.355 240 464ZM528 464C528 481.645 513.645 496 496 496S464 481.645 464 464S478.355 432 496 432S528 446.355 528 464Z" })
  }
));
CartFlatbedEmptyThin.displayName = "CartFlatbedEmptyThin";
var CartFlatbedEmpty_default = CartFlatbedEmptyThin;
