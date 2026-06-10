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
var Squirrel_exports = {};
__export(Squirrel_exports, {
  default: () => Squirrel_default
});
module.exports = __toCommonJS(Squirrel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquirrelRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.965 256C497.589 256 511.963 241.625 511.963 224V192C511.963 133.5 474.84 86.125 423.969 74.625V48C423.969 34.75 413.22 24 399.971 24C344.6 24 311.227 66.75 293.479 97.25C264.981 43 206.11 0 147.739 0C66.245 0 0 66.25 0 147.75C0 216.75 47.622 274.875 111.742 291L102.868 309.375C84.244 358.25 91.368 409.5 125.491 452.125C156.864 491.375 205.985 512 256.231 512H495.964C504.213 512 511.588 505.75 511.963 497.625C512.838 479.125 498.214 464 479.965 464H450.092C462.841 445.625 471.966 423.5 471.966 400C471.966 348.625 441.967 310.375 396.096 299.25L403.971 256H479.965ZM353.224 344C373.723 344 394.096 351.125 408.595 365.625C450.467 407.5 395.221 458.625 381.597 464H242.482C186.361 464 140.865 418.375 140.865 362.375C140.865 350.625 143.115 338.5 146.989 328.25L185.986 247.5H151.239C100.493 247.5 55.246 211.125 48.871 160.875C40.997 100 88.369 48 147.739 48C202.61 48 262.981 108.25 262.981 163.25H263.356L208.985 293.875C205.61 302 209.485 311.375 217.609 314.75L232.483 321C240.607 324.375 249.981 320.5 253.357 312.25L325.476 138.75C341.475 106.75 357.849 86.75 375.973 77.75V120H399.971C435.843 120 463.966 151.625 463.966 192V208H363.973L339.225 344H353.224ZM399.971 176C408.845 176 415.97 168.875 415.97 160S408.845 144 399.971 144S383.972 151.125 383.972 160S391.096 176 399.971 176Z" })
  }
));
SquirrelRegular.displayName = "SquirrelRegular";
var Squirrel_default = SquirrelRegular;
