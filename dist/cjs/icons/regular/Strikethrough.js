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
var Strikethrough_exports = {};
__export(Strikethrough_exports, {
  default: () => Strikethrough_default
});
module.exports = __toCommonJS(Strikethrough_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StrikethroughRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 240H287.168C278.906 237.541 270.607 235.09 262.6 232.836L244.859 227.789C161.484 203.691 138.441 182.828 146.24 138.525C155.959 83.125 227.963 74.016 286.785 83.094C303.555 85.658 323.533 91.002 349.627 99.895C362.314 104.238 376.242 97.596 380.658 85.078C385.072 72.545 378.322 58.871 365.602 54.543C336.668 44.682 314.021 38.682 294.313 35.65C189.705 19.568 110.936 57.605 98.152 130.336C88.412 185.74 113.037 218.754 146.475 240H24C10.75 240 0 250.75 0 264S10.75 288 24 288H488C501.25 288 512 277.25 512 264S501.25 240 488 240ZM361.654 336C366.754 346.26 368.389 358.248 365.713 373.467C355.994 428.852 284.021 437.945 225.041 428.883C199.154 425.053 168.965 414.35 142.316 404.91L128.611 400.064C115.891 395.627 101.979 402.176 97.469 414.678C92.975 427.18 99.629 440.9 112.318 445.322L125.785 450.072C154.545 460.262 187.148 471.826 217.641 476.342C233.633 478.797 249.021 480 263.662 480C344.75 480 402.971 443.26 413.801 381.656C416.848 364.309 416.42 349.303 413.576 336H361.654Z" })
  }
));
StrikethroughRegular.displayName = "StrikethroughRegular";
var Strikethrough_default = StrikethroughRegular;
