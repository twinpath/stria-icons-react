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
var Syringe_exports = {};
__export(Syringe_exports, {
  default: () => Syringe_default
});
module.exports = __toCommonJS(Syringe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SyringeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.969 71.031L440.969 7.031C431.594 -2.344 416.406 -2.344 407.031 7.031S397.656 31.594 407.031 40.969L422.062 56L384 94.062L328.969 39.031C319.594 29.656 304.406 29.656 295.031 39.031C286.564 47.498 286.16 60.502 292.986 69.889L442.111 219.014C446.301 222.061 451.051 224 456 224C462.141 224 468.281 221.656 472.969 216.969C482.344 207.594 482.344 192.406 472.969 183.031L417.938 128L456 89.938L471.031 104.969C475.719 109.656 481.859 112 488 112S500.281 109.656 504.969 104.969C514.344 95.594 514.344 80.406 504.969 71.031ZM208.75 154.125L267.312 212.687C273.562 218.937 273.562 229.062 267.312 235.312C264.188 238.438 260.094 240 256 240S247.812 238.438 244.688 235.312L186.125 176.75L144.75 218.125L203.312 276.687C209.562 282.937 209.562 293.062 203.312 299.312C200.188 302.438 196.094 304 192 304S183.812 302.438 180.688 299.312L122.125 240.75L82.746 280.129C70.742 292.131 64 308.41 64 325.385V414.062L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.859 512 24 512S36.281 509.656 40.969 504.969L97.938 448H186.631C203.605 448 219.885 441.256 231.887 429.254L419.494 241.635L270.359 92.516L208.75 154.125Z" })
  }
));
SyringeSolid.displayName = "SyringeSolid";
var Syringe_default = SyringeSolid;
