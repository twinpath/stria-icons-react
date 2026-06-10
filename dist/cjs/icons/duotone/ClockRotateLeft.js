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
var ClockRotateLeft_exports = {};
__export(ClockRotateLeft_exports, {
  default: () => ClockRotateLeft_default
});
module.exports = __toCommonJS(ClockRotateLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockRotateLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M491.301 207.586C484.27 171.426 431.566 15.902 256 16C181.545 15.961 125.334 47.152 86.348 86.32L54.395 54.344C40.231 40.169 16 50.201 16 70.239V191.82C16 200.653 23.16 207.812 31.992 207.812H153.444C173.495 207.812 183.54 183.574 169.367 169.391L131.633 131.629C184.082 78.82 243.541 79.938 256 79.945C349.996 79.914 413.16 147.816 427.938 217.531C452.047 331.281 365.551 431.957 256 431.957C227.399 431.957 200.396 425.061 176.508 412.881C163.95 406.479 148.811 408.377 138.849 418.348L138.849 418.348C123.705 433.506 127.217 459.364 146.236 469.232C179.116 486.292 216.394 496 256 496C404.314 496 521.207 361.375 491.301 207.586Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128C242.75 128 232 138.75 232 152V272C232 279.562 235.562 286.656 241.594 291.188L305.594 339.188C309.922 342.438 314.969 344 319.984 344C327.281 344 334.484 340.688 339.203 334.406C347.156 323.781 345 308.75 334.406 300.812L280 260V152C280 138.75 269.25 128 256 128Z" })
    ]
  }
));
ClockRotateLeftDuotone.displayName = "ClockRotateLeftDuotone";
var ClockRotateLeft_default = ClockRotateLeftDuotone;
