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
var BlindsRaised_exports = {};
__export(BlindsRaised_exports, {
  default: () => BlindsRaised_default
});
module.exports = __toCommonJS(BlindsRaised_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsRaisedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 127.75H0L15.941 63.988C15.963 63.988 15.979 64 16 64H96V127.75ZM96 159.75H16L0 223.75H96V159.75ZM128 159.75V223.75H512L496 159.75H128ZM496 64H128V127.75H512L496.059 63.988C496.037 63.988 496.021 64 496 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 16V48C512 56.836 504.836 64 496 64H128V418.75C150 426.5 163.25 449 159.25 472C155.375 495.125 135.375 512 112 512S68.625 495.125 64.75 472C60.75 449 74 426.5 96 418.75V64H16C7.164 64 0 56.836 0 48V16C0 7.162 7.164 0 16 0H496C504.836 0 512 7.162 512 16Z" })
    ]
  }
));
BlindsRaisedDuotone.displayName = "BlindsRaisedDuotone";
var BlindsRaised_default = BlindsRaisedDuotone;
