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
var ArrowDownLeftAndArrowUpRightToCenter_exports = {};
__export(ArrowDownLeftAndArrowUpRightToCenter_exports, {
  default: () => ArrowDownLeftAndArrowUpRightToCenter_default
});
module.exports = __toCommonJS(ArrowDownLeftAndArrowUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownLeftAndArrowUpRightToCenterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286.828 238.005C289.762 239.216 292.875 239.856 296 239.856H440C453.25 239.856 464 229.106 464 215.856S453.25 191.856 440 191.856H353.938L488.969 56.825C498.344 47.45 498.344 32.263 488.969 22.888S464.406 13.513 455.031 22.888L320 157.919V71.856C320 58.606 309.25 47.856 296 47.856S272 58.606 272 71.856V215.856C272 218.989 272.641 222.106 273.855 225.036C276.289 230.899 280.965 235.571 286.828 238.005ZM225.172 273.708C222.238 272.497 219.125 271.856 216 271.856H72C58.75 271.856 48 282.606 48 295.856S58.75 319.856 72 319.856H158.063L23.031 454.888C13.656 464.263 13.656 479.45 23.031 488.825S47.594 498.2 56.969 488.825L192 353.794V439.856C192 453.106 202.75 463.856 216 463.856S240 453.106 240 439.856V295.856C240 292.724 239.359 289.606 238.145 286.677C235.711 280.814 231.035 276.142 225.172 273.708Z" })
  }
));
ArrowDownLeftAndArrowUpRightToCenterRegular.displayName = "ArrowDownLeftAndArrowUpRightToCenterRegular";
var ArrowDownLeftAndArrowUpRightToCenter_default = ArrowDownLeftAndArrowUpRightToCenterRegular;
