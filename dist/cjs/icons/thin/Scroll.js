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
var Scroll_exports = {};
__export(Scroll_exports, {
  default: () => Scroll_default
});
module.exports = __toCommonJS(Scroll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrollThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568 336H280C275.578 336 272 339.594 272 344V400C272 435.281 243.297 464 208 464S144 435.281 144 400V104C144 81.271 133.199 61.207 116.689 48H400C435.297 48 464 76.719 464 112V296C464 300.406 467.578 304 472 304S480 300.406 480 296V112C480 67.875 444.109 32 400 32H72C32.297 32 0 64.312 0 104V168C0 172.406 3.578 176 8 176H88C92.422 176 96 172.406 96 168S92.422 160 88 160H16V104C16 73.125 41.125 48 72 48S128 73.125 128 104V400C128 444.125 163.891 480 208 480H496C540.109 480 576 444.125 576 400V344C576 339.594 572.422 336 568 336ZM560 400C560 435.281 531.297 464 496 464H255.953C275.391 449.406 288 426.125 288 400V352H560V400Z" })
  }
));
ScrollThin.displayName = "ScrollThin";
var Scroll_default = ScrollThin;
