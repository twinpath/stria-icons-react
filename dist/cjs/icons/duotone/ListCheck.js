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
var ListCheck_exports = {};
__export(ListCheck_exports, {
  default: () => ListCheck_default
});
module.exports = __toCommonJS(ListCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128H480C497.674 128 512 113.674 512 96S497.674 64 480 64H256C238.326 64 224 78.326 224 96S238.326 128 256 128ZM480 224H256C238.326 224 224 238.326 224 256S238.326 288 256 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224ZM480 384H192C174.326 384 160 398.326 160 416S174.326 448 192 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M118.15 199.938L63.088 261.141L40.963 239.031C31.588 229.656 16.4 229.656 7.025 239.031S-2.35 263.594 7.025 272.969L47.025 312.969C51.525 317.484 57.65 320 63.994 320C64.213 320 64.4 320 64.619 319.984C71.213 319.812 77.432 316.953 81.838 312.062L153.838 232.062C162.713 222.203 161.9 207.031 152.057 198.156C142.213 189.312 127.057 190.094 118.15 199.938ZM118.15 39.938L63.088 101.141L40.963 79.031C31.588 69.656 16.4 69.656 7.025 79.031S-2.35 103.594 7.025 112.969L47.025 152.969C51.525 157.484 57.65 160 63.994 160C64.213 160 64.4 160 64.619 159.984C71.213 159.812 77.432 156.953 81.838 152.062L153.838 72.062C162.713 62.203 161.9 47.031 152.057 38.156C142.213 29.312 127.057 30.094 118.15 39.938ZM48 367.998C21.49 367.998 0 389.49 0 415.998C0 442.508 21.49 464 48 464S96 442.508 96 415.998C96 389.49 74.51 367.998 48 367.998Z" })
    ]
  }
));
ListCheckDuotone.displayName = "ListCheckDuotone";
var ListCheck_default = ListCheckDuotone;
