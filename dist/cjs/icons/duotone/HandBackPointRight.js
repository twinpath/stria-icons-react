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
var HandBackPointRight_exports = {};
__export(HandBackPointRight_exports, {
  default: () => HandBackPointRight_default
});
module.exports = __toCommonJS(HandBackPointRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 416C272 406.852 269.303 398.385 264.857 391.107C287.131 386.941 304 367.467 304 344C304 326.621 294.67 311.535 280.832 303.111C303.117 298.955 320 279.477 320 256C320 243.652 315.203 232.506 307.541 224H472C494.094 224 512 206.094 512 184S494.094 144 472 144H247.084L247.074 143.988H176.006C167.17 143.988 160.006 136.824 160.006 127.988C160.006 119.15 167.17 111.988 176.006 111.988H221.475L197.484 82C188.375 70.625 174.578 64 160 64H112C101.625 64 91.516 67.375 83.203 73.594L57.609 92.781C21.531 119.844 0 162.906 0 208V320C0 323.318 0.338 326.557 0.979 329.686C6.064 404.506 67.91 464 144 464H224C250.516 464 272 442.5 272 416Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HandBackPointRightDuotone.displayName = "HandBackPointRightDuotone";
var HandBackPointRight_default = HandBackPointRightDuotone;
