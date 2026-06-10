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
var Peach_exports = {};
__export(Peach_exports, {
  default: () => Peach_default
});
module.exports = __toCommonJS(Peach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PeachLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M111.094 91.641C119.062 87.812 122.406 78.25 118.562 70.281C114.219 61.25 112 51.953 112 42.672V32H178.188C208.094 32 233.688 52.422 240.406 81.641C242.062 88.906 248.531 94.062 256 94.062C263.438 94.062 269.906 88.922 271.594 81.656C278.344 52.422 303.906 32 333.812 32H400V42.672C400 51.953 397.781 61.25 393.438 70.281C389.594 78.25 392.938 87.813 400.906 91.641C408.75 95.484 418.406 92.156 422.25 84.188C428.719 70.766 432 56.812 432 42.672V16C432 7.156 424.844 0 416 0H333.812C302.062 0 273.562 15.312 256 39.797C238.469 15.312 209.969 0 178.188 0H96C87.156 0 80 7.156 80 16V42.672C80 56.812 83.281 70.766 89.75 84.188C93.594 92.172 103.25 95.453 111.094 91.641ZM333.5 96C307.662 96 282.348 101.68 258.061 112.711C233.533 102.082 205.629 96 176 96C78.725 97.289 0 172.879 0 265.594C0 429.656 247.764 510.16 251.094 511.234C252.688 511.75 254.344 512 256 512S259.312 511.75 260.906 511.234C264.105 510.201 512 428.963 512 265.594C512 172.078 431.938 96 333.5 96ZM256 479.078C160.252 445.035 32 367.262 32 265.594C32 190.523 96.395 129.289 176 128C255.406 128 320 178.25 320 240C320 248.844 327.156 256 336 256S352 248.844 352 240C352 197.826 329.588 159.951 294.16 133.592C307.088 129.996 320.219 128 333.5 128C414.281 128 480 189.719 480 265.594C480 382.236 318.832 456.703 256 479.078Z" })
  }
));
PeachLight.displayName = "PeachLight";
var Peach_default = PeachLight;
