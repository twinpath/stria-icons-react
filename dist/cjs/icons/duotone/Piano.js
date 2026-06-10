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
var Piano_exports = {};
__export(Piano_exports, {
  default: () => Piano_default
});
module.exports = __toCommonJS(Piano_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PianoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 480V352H64V448H448V352H512V480C512 497.625 497.625 512 480 512H32C14.375 512 0 497.625 0 480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 352V184.5C0 82.625 82.5 0 184.5 0H199.5C301.5 0 384 82.625 384 184.5C384 208.75 397.75 230.875 419.375 241.75L476.625 270.25C498.25 281.125 512 303.25 512 327.5V352H416V408C416 412.375 412.375 416 408 416H392C387.625 416 384 412.375 384 408V352H352V408C352 412.375 348.375 416 344 416H328C323.625 416 320 412.375 320 408V352H256V408C256 412.375 252.375 416 248 416H232C227.625 416 224 412.375 224 408V352H192V408C192 412.375 188.375 416 184 416H168C163.625 416 160 412.375 160 408V352H128V408C128 412.375 124.375 416 120 416H104C99.625 416 96 412.375 96 408V352H0Z" })
    ]
  }
));
PianoDuotone.displayName = "PianoDuotone";
var Piano_default = PianoDuotone;
