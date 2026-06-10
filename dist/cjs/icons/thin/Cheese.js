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
var Cheese_exports = {};
__export(Cheese_exports, {
  default: () => Cheese_default
});
module.exports = __toCommonJS(Cheese_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheeseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.811 32.668C313.721 32.221 310.627 32 307.551 32C293.381 32 279.574 36.684 268.227 45.512L12.244 246.398C4.514 252.465 0 261.746 0 271.572V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V256C512 82.297 377.301 41.426 316.811 32.668ZM278.051 58.141C286.58 51.506 296.779 48 307.551 48C309.865 48 312.193 48.166 314.518 48.502C369.084 56.402 496 92.436 496 256H25.926L278.051 58.141ZM464 464H48C30.355 464 16 449.645 16 432V272H496V432C496 449.645 481.645 464 464 464Z" })
  }
));
CheeseThin.displayName = "CheeseThin";
var Cheese_default = CheeseThin;
