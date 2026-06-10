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
var ICursor_exports = {};
__export(ICursor_exports, {
  default: () => ICursor_default
});
module.exports = __toCommonJS(ICursor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ICursorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 488C256 501.25 245.25 512 232 512C189.07 512 151.23 490.598 128 458.084C104.77 490.598 66.93 512 24 512C10.75 512 0 501.25 0 488S10.75 464 24 464C68.125 464 104 428.125 104 384V280H72C58.75 280 48 269.25 48 256S58.75 232 72 232H104V128C104 83.875 68.125 48 24 48C10.75 48 0 37.25 0 24S10.75 0 24 0C66.93 0 104.77 21.402 128 53.916C151.23 21.402 189.07 0 232 0C245.25 0 256 10.75 256 24S245.25 48 232 48C187.875 48 152 83.875 152 128V232H184C197.25 232 208 242.75 208 256S197.25 280 184 280H152V384C152 428.125 187.875 464 232 464C245.25 464 256 474.75 256 488Z" })
  }
));
ICursorRegular.displayName = "ICursorRegular";
var ICursor_default = ICursorRegular;
