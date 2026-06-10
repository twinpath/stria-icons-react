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
var ArrowDownFromLine_exports = {};
__export(ArrowDownFromLine_exports, {
  default: () => ArrowDownFromLine_default
});
module.exports = __toCommonJS(ArrowDownFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownFromLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 80.032H360C373.25 80.032 384 69.275 384 56.016S373.25 32 360 32H24C10.75 32 0 42.757 0 56.016S10.75 80.032 24 80.032ZM302.531 303.743L216 395.718V152.08C216 138.821 205.25 128.064 192 128.064S168 138.821 168 152.08V395.718L81.469 303.743C76.75 298.708 70.375 296.175 64 296.175C58.094 296.175 52.188 298.333 47.563 302.711C37.906 311.779 37.438 326.977 46.531 336.639L174.531 472.73C183.594 482.423 200.406 482.423 209.469 472.73L337.469 336.639C346.562 326.977 346.094 311.779 336.437 302.711C326.812 293.611 311.625 294.049 302.531 303.743Z" })
  }
));
ArrowDownFromLineRegular.displayName = "ArrowDownFromLineRegular";
var ArrowDownFromLine_default = ArrowDownFromLineRegular;
