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
var C_exports = {};
__export(C_exports, {
  default: () => C_default
});
module.exports = __toCommonJS(C_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M219.283 480C160.518 480 105.314 456.594 63.83 414.094C21.275 370.516 -0.002 313.258 0 256C0.002 198.742 21.283 141.484 63.846 97.906C105.314 55.406 160.518 32 219.283 32S333.252 55.406 374.736 97.906C387.08 110.531 386.83 130.812 374.189 143.156C361.549 155.469 341.314 155.281 328.924 142.594C299.596 112.562 260.658 96 219.283 96S138.971 112.562 109.643 142.594C48.58 205.125 48.58 306.875 109.627 369.406C138.971 399.438 177.908 416 219.283 416S299.596 399.438 328.924 369.406C341.314 356.75 361.549 356.531 374.189 368.844C386.83 381.188 387.08 401.469 374.736 414.094C333.252 456.594 278.049 480 219.283 480Z" })
  }
));
CRegular.displayName = "CRegular";
var C_default = CRegular;
