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
var AnglesUp_exports = {};
__export(AnglesUp_exports, {
  default: () => AnglesUp_default
});
module.exports = __toCommonJS(AnglesUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M67.501 245.016L192.001 127.086L316.501 245.016C332.501 260.23 357.909 259.543 373.034 243.484C388.221 227.453 387.565 202.141 371.503 186.953L219.501 42.969C211.782 35.656 201.907 32 192.001 32S172.219 35.656 164.501 42.969L12.499 186.953C-3.564 202.141 -4.22 227.453 10.967 243.484C26.186 259.574 51.532 260.262 67.501 245.016ZM219.501 234.953C211.782 227.641 201.907 223.984 192.001 223.984S172.219 227.641 164.501 234.953L12.499 378.938C-3.564 394.125 -4.22 419.438 10.967 435.469C26.186 451.559 51.532 452.246 67.501 437L192.001 319.07L316.501 437C332.501 452.215 357.909 451.527 373.034 435.469C388.221 419.437 387.565 394.125 371.503 378.937L219.501 234.953Z" })
  }
));
AnglesUpSolid.displayName = "AnglesUpSolid";
var AnglesUp_default = AnglesUpSolid;
