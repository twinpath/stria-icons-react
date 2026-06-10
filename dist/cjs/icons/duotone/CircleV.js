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
var CircleV_exports = {};
__export(CircleV_exports, {
  default: () => CircleV_default
});
module.exports = __toCommonJS(CircleV_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleVDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM381.469 178.734L277.469 386.734C273.406 394.859 265.094 400 256 400S238.594 394.859 234.531 386.734L130.531 178.734C124.609 166.875 129.406 152.469 141.266 146.531C153.188 140.641 167.547 145.406 173.469 157.266L256 322.328L338.531 157.266C344.469 145.406 358.875 140.641 370.734 146.531C382.594 152.469 387.391 166.875 381.469 178.734Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M370.74 146.531C358.881 140.641 344.474 145.406 338.537 157.266L256.006 322.328L173.474 157.266C167.552 145.406 153.193 140.641 141.271 146.531C129.412 152.469 124.615 166.875 130.537 178.734L234.537 386.734C238.599 394.859 246.912 400 256.006 400S273.412 394.859 277.474 386.734L381.474 178.734C387.396 166.875 382.599 152.469 370.74 146.531Z" })
    ]
  }
));
CircleVDuotone.displayName = "CircleVDuotone";
var CircleV_default = CircleVDuotone;
