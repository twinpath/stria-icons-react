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
var TreeLarge_exports = {};
__export(TreeLarge_exports, {
  default: () => TreeLarge_default
});
module.exports = __toCommonJS(TreeLarge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeLargeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.206 432.625L453.715 378.875C462.838 374.25 470.462 366.75 475.211 357.125C483.209 340.625 481.085 320.875 469.712 306.5L413.597 235C423.47 230 431.469 221.75 436.093 211.125C443.716 193.5 440.092 173.125 426.844 159.125L290.869 15.125C281.745 5.375 269.248 0 256 0C242.752 0 230.255 5.375 221.131 15L85.156 159C71.908 172.875 68.284 193.375 75.907 211C80.531 221.625 88.53 229.875 98.403 234.875L42.288 306.375C30.79 320.75 28.791 340.5 36.789 357C41.538 366.625 49.162 374.25 58.285 378.75L11.794 432.5C-0.579 446.75 -3.453 466.75 4.295 483.875C12.169 501 29.291 512 48.037 512H463.963C482.709 512 499.831 501 507.705 483.875C515.453 466.75 512.579 446.75 500.206 432.625ZM48.037 464L158.892 336H80.032L193.136 192H120.024L256 48L391.976 192H318.864L431.968 336H353.108L463.963 464H48.037Z" })
  }
));
TreeLargeRegular.displayName = "TreeLargeRegular";
var TreeLarge_default = TreeLargeRegular;
