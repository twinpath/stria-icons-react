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
var BookOpen_exports = {};
__export(BookOpen_exports, {
  default: () => BookOpen_default
});
module.exports = __toCommonJS(BookOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M557.39 61.294C512.275 41.507 468.914 31.688 431.719 32.038C359.281 33.351 312.734 65.583 310.781 66.958C306.531 69.958 304 74.833 304 80.036V464.016C304 468.408 307.543 480 320 480C323.484 480 326.938 478.875 329.781 476.672C333.706 473.654 427.22 403.511 553.554 462.668C564.01 467.564 576 459.563 576 448.017L576 90.454C576 77.971 568.821 66.308 557.39 61.294Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.281 32.038C106.937 31.293 63.701 41.444 18.6 61.29C7.178 66.316 0 77.964 0 90.442L0 448.017C0 459.563 11.991 467.564 22.447 462.667C148.733 403.527 242.293 473.67 246.219 476.672C249.062 478.875 252.516 480 256 480C268.403 480 272 468.624 272 464.016V80.036C272 74.833 269.469 69.958 265.219 66.958C263.266 65.583 216.719 33.351 144.281 32.038Z" })
    ]
  }
));
BookOpenDuotone.displayName = "BookOpenDuotone";
var BookOpen_default = BookOpenDuotone;
