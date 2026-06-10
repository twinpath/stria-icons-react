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
var SquareUpLeft_exports = {};
__export(SquareUpLeft_exports, {
  default: () => SquareUpLeft_default
});
module.exports = __toCommonJS(SquareUpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M252.449 216.566L284.045 184.969C299.166 169.852 288.457 144 267.074 144H136C129.373 144 123.373 146.688 119.029 151.031S112.002 161.371 112 168V299.074C112 320.453 137.852 331.164 152.971 316.047L184.566 284.449L258.105 357.988C267.479 367.359 282.676 367.359 292.047 357.988L325.988 324.047C335.359 314.672 335.361 299.477 325.988 290.105L252.449 216.566ZM314.674 312.734L280.732 346.672C277.613 349.793 272.539 349.793 269.42 346.672L184.566 261.82L141.656 304.73C138.246 308.141 134.424 307.082 132.938 306.469C131.453 305.852 128.002 303.898 128.002 299.074V168C128.002 165.117 129.467 163.219 130.344 162.344C131.219 161.469 133.117 160 136 160H267.074C271.9 160 273.85 163.453 274.467 164.938C275.082 166.422 276.143 170.246 272.732 173.656L229.822 216.566L314.674 301.422C317.795 304.539 317.795 309.613 314.674 312.734ZM384 32H64C28.652 32 0 60.656 0 96V416C0 451.348 28.652 480 64 480H384C419.348 480 448 451.348 448 416V96C448 60.656 419.348 32 384 32ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416Z" })
  }
));
SquareUpLeftThin.displayName = "SquareUpLeftThin";
var SquareUpLeft_default = SquareUpLeftThin;
