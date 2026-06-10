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
var BracketCurly_exports = {};
__export(BracketCurly_exports, {
  default: () => BracketCurly_default
});
module.exports = __toCommonJS(BracketCurly_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 152.453V104C80 73.125 105.125 48 136 48H184C188.422 48 192 44.422 192 40S188.422 32 184 32H136C96.297 32 64 64.297 64 104V152.453C64 193.531 41.172 230.469 4.422 248.844C1.719 250.203 0 252.969 0 256S1.719 261.797 4.422 263.156C41.172 281.531 64 318.469 64 359.547V408C64 447.703 96.297 480 136 480H184C188.422 480 192 476.422 192 472S188.422 464 184 464H136C105.125 464 80 438.875 80 408V359.547C80 317.203 58.891 278.703 24.062 256C58.891 233.297 80 194.797 80 152.453Z" })
  }
));
BracketCurlyThin.displayName = "BracketCurlyThin";
var BracketCurly_default = BracketCurlyThin;
