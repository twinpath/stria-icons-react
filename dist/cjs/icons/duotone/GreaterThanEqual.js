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
var GreaterThanEqual_exports = {};
__export(GreaterThanEqual_exports, {
  default: () => GreaterThanEqual_default
});
module.exports = __toCommonJS(GreaterThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GreaterThanEqualDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 439.998V440C0 462.092 17.902 480 39.984 480H408.016C430.098 480 448 462.092 448 440S430.098 400 408.016 400H39.984C17.902 400 0 417.908 0 439.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34.804 326.686C41.007 342.406 56.068 352 72.021 352C76.896 352 81.865 351.094 86.693 349.219L390.687 229.213C405.968 223.182 415.999 208.432 415.999 191.992C415.999 175.555 405.968 160.805 390.687 154.771L86.693 34.768C66.068 26.736 42.882 36.768 34.804 57.299C26.695 77.863 36.773 101.082 57.318 109.209L267.064 191.992L57.318 274.777C36.773 282.902 26.695 306.123 34.804 326.686Z" })
    ]
  }
));
GreaterThanEqualDuotone.displayName = "GreaterThanEqualDuotone";
var GreaterThanEqual_default = GreaterThanEqualDuotone;
