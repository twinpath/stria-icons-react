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
var CheckDouble_exports = {};
__export(CheckDouble_exports, {
  default: () => CheckDouble_default
});
module.exports = __toCommonJS(CheckDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckDoubleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M485.656 162.342C482.531 159.217 477.468 159.217 474.343 162.342L192 444.685L37.656 290.342C34.531 287.217 29.468 287.217 26.343 290.342S23.218 298.529 26.343 301.654L186.343 461.654C187.906 463.217 189.953 463.998 192 463.998S196.093 463.217 197.656 461.654L485.656 173.654C488.781 170.529 488.781 165.467 485.656 162.342ZM186.343 237.654C187.906 239.217 189.953 239.998 192 239.998S196.093 239.217 197.656 237.654L389.656 45.654C392.781 42.529 392.781 37.467 389.656 34.342S381.468 31.217 378.343 34.342L192 220.685L101.656 130.342C98.531 127.217 93.468 127.217 90.343 130.342S87.218 138.529 90.343 141.654L186.343 237.654Z" })
  }
));
CheckDoubleThin.displayName = "CheckDoubleThin";
var CheckDouble_default = CheckDoubleThin;
