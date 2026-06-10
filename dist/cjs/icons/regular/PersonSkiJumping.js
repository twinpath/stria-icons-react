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
var PersonSkiJumping_exports = {};
__export(PersonSkiJumping_exports, {
  default: () => PersonSkiJumping_default
});
module.exports = __toCommonJS(PersonSkiJumping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiJumpingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.966 96C426.466 96 447.966 74.5 447.966 48S426.466 0 399.966 0C373.465 0 351.965 21.5 351.965 48S373.465 96 399.966 96ZM510.718 190.125C508.468 177 495.842 168.125 482.967 170.375C469.842 172.625 461.092 185 463.217 198.125C466.592 217.375 457.217 237 441.216 246.25L168.961 386.375L219.462 263.75C219.837 262.75 220.712 261.75 221.462 260.875L342.715 150.625C351.84 141.375 354.59 127.75 349.59 115.75S332.964 96 319.964 96H135.96C122.71 96 111.96 106.75 111.96 120S122.71 144 135.96 144H249.713L180.961 233.375C179.711 235 179.211 235.375 175.086 245.5L121.71 374.875C116.96 386.375 122.21 399.25 132.96 405L12.958 466.75C1.208 472.75 -3.417 487.25 2.708 499C6.958 507.25 15.333 512 24.083 512C27.708 512 31.458 511.125 34.959 509.25L464.217 288.375C498.592 268.75 517.218 229.25 510.718 190.125Z" })
  }
));
PersonSkiJumpingRegular.displayName = "PersonSkiJumpingRegular";
var PersonSkiJumping_default = PersonSkiJumpingRegular;
