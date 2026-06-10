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
const PersonSkiJumpingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.718 190.25C508.468 177.125 495.842 168.25 482.967 170.5C469.842 172.75 461.092 185.125 463.217 198.25C466.592 217.5 457.217 237.125 441.216 246.25L173.961 383.75L218.837 274.75L340.214 164.25C351.715 152.75 355.215 135.75 348.965 120.75S328.214 96 311.964 96H127.96C110.21 96 95.96 110.25 95.96 128S110.21 160 127.96 160H225.462L166.586 236.5C163.211 240.875 166.711 232.875 106.335 379.75C101.21 392.25 104.585 406 113.71 414.75L12.958 466.75C1.208 472.75 -3.417 487.25 2.708 499C6.958 507.25 15.333 512 24.083 512C27.708 512 31.583 511.125 35.084 509.25L464.217 288.375C498.592 268.75 517.218 229.25 510.718 190.25ZM399.966 96C426.466 96 447.966 74.5 447.966 48S426.466 0 399.966 0C373.465 0 351.965 21.5 351.965 48S373.465 96 399.966 96Z" })
  }
));
PersonSkiJumpingSolid.displayName = "PersonSkiJumpingSolid";
var PersonSkiJumping_default = PersonSkiJumpingSolid;
