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
var CircleUpLeft_exports = {};
__export(CircleUpLeft_exports, {
  default: () => CircleUpLeft_default
});
module.exports = __toCommonJS(CircleUpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUpLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM284.449 216.566L316.045 184.969C331.166 169.852 320.457 144 299.074 144H168C161.373 144 155.373 146.688 151.029 151.031S144.002 161.371 144 168V299.074C144 320.453 169.852 331.164 184.971 316.047L216.566 284.449L290.105 357.988C299.479 367.359 314.676 367.359 324.047 357.988L357.988 324.047C367.359 314.672 367.361 299.477 357.988 290.105L284.449 216.566ZM346.674 312.734L312.732 346.672C309.613 349.793 304.539 349.793 301.42 346.672L216.566 261.82L173.656 304.73C170.246 308.141 166.424 307.082 164.938 306.469C163.453 305.852 160.002 303.898 160.002 299.074V168C160.002 165.117 161.467 163.219 162.344 162.344C163.219 161.469 165.117 160 168 160H299.074C303.9 160 305.85 163.453 306.467 164.938C307.082 166.422 308.143 170.246 304.732 173.656L261.822 216.566L346.674 301.422C349.795 304.539 349.795 309.613 346.674 312.734Z" })
  }
));
CircleUpLeftThin.displayName = "CircleUpLeftThin";
var CircleUpLeft_default = CircleUpLeftThin;
