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
var Eject_exports = {};
__export(Eject_exports, {
  default: () => Eject_default
});
module.exports = __toCommonJS(Eject_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EjectThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.961 431.977H8.039C3.617 431.977 0.041 435.574 0.041 439.988C0.041 444.4 3.617 448 8.039 448H439.961C444.383 448 447.959 444.4 447.959 439.988C447.959 435.574 444.383 431.977 439.961 431.977ZM34.145 352.766H413.855C427.619 352.766 439.586 345.381 445.086 333.52C450.209 322.473 448.506 310.234 440.539 300.814L250.668 75.547C237.701 60.15 210.299 60.15 197.332 75.547L7.461 300.814C-0.506 310.234 -2.209 322.473 2.914 333.52C8.414 345.381 20.381 352.766 34.145 352.766ZM19.678 311.143L209.549 85.875C213.002 81.807 218.268 79.459 224 79.459S234.998 81.807 238.451 85.875L428.322 311.143C432.213 315.775 433.041 321.471 430.588 326.76C428.338 331.578 422.777 336.742 413.855 336.742H34.145C25.223 336.742 19.662 331.578 17.412 326.76C14.959 321.471 15.787 315.775 19.678 311.143Z" })
  }
));
EjectThin.displayName = "EjectThin";
var Eject_default = EjectThin;
