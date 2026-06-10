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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon5Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 355.688C320 424.219 264.235 480 195.689 480H89.737C49.143 480 13.253 454.125 0.409 415.625C-0.981 411.437 1.284 406.906 5.472 405.5C9.691 404.125 14.191 406.375 15.597 410.562C26.253 442.531 56.05 464 89.737 464H195.689C255.407 464 304 415.406 304 355.688S255.407 247.375 195.689 247.375H8.003C5.55 247.375 3.238 246.25 1.722 244.313C0.206 242.406 -0.34 239.875 0.222 237.5L48.222 38.125C49.097 34.531 52.3 32 56.003 32H280C284.422 32 288 35.594 288 40S284.422 48 280 48H62.3L18.159 231.375H195.689C264.235 231.375 320 287.156 320 355.688Z" })
  }
));
Icon5Thin.displayName = "Icon5Thin";
var __default = Icon5Thin;
