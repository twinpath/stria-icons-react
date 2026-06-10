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
var Wheelchair_exports = {};
__export(Wheelchair_exports, {
  default: () => Wheelchair_default
});
module.exports = __toCommonJS(Wheelchair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WheelchairDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 352C320 440.365 248.365 512 160 512S0 440.365 0 352S71.635 192 160 192C160.713 192 161.369 192.199 162.08 192.209L170.312 241.043C166.863 240.721 163.531 240 160 240C98.242 240 48 290.242 48 352S98.242 464 160 464S272 413.758 272 352H320ZM240.004 48C240.004 21.492 218.514 0 192.004 0S144.004 21.492 144.004 48S165.494 96 192.004 96S240.004 74.508 240.004 48Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.344 421.875C504.75 405.125 486.813 396.031 469.875 401.656L450.5 408.094L408.799 308.125C403.938 295.969 392.166 288 379.074 288H281.295L270.891 240H336C353.688 240 368 225.688 368 208S353.688 176 336 176H257.018L255.551 169.23C251.77 142.98 227.207 124.762 201.238 128.48C174.988 132.23 156.738 156.543 160.488 182.793L184.164 323.227C185.82 339.566 199.576 352 216 352H357.424L402.281 459.875C407.281 472.344 419.25 480 432 480C435.344 480 438.781 479.469 442.125 478.344L490.125 462.344C506.875 456.781 515.938 438.656 510.344 421.875Z" })
    ]
  }
));
WheelchairDuotone.displayName = "WheelchairDuotone";
var Wheelchair_default = WheelchairDuotone;
