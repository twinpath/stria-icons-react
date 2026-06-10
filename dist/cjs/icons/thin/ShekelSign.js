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
var ShekelSign_exports = {};
__export(ShekelSign_exports, {
  default: () => ShekelSign_default
});
module.exports = __toCommonJS(ShekelSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShekelSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 136V344C280 348.422 283.594 352 288 352S296 348.422 296 344V136C296 78.656 249.344 32 192 32H72C49.938 32 32 49.938 32 72V472C32 476.422 35.594 480 40 480S48 476.422 48 472V72C48 58.766 58.781 48 72 48H192C240.531 48 280 87.469 280 136ZM408 32C403.594 32 400 35.578 400 40V376C400 424.531 360.531 464 312 464H192C178.781 464 168 453.234 168 440V168C168 163.578 164.406 160 160 160S152 163.578 152 168V440C152 462.062 169.938 480 192 480H312C369.344 480 416 433.344 416 376V40C416 35.578 412.406 32 408 32Z" })
  }
));
ShekelSignThin.displayName = "ShekelSignThin";
var ShekelSign_default = ShekelSignThin;
