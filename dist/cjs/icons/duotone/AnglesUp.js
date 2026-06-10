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
const AnglesUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M219.501 234.953C211.782 227.641 201.907 223.984 192.001 223.984S172.219 227.641 164.501 234.953L12.499 378.938C-3.564 394.125 -4.22 419.438 10.967 435.469C26.186 451.559 51.532 452.246 67.501 437L192.001 319.07L316.501 437C332.501 452.215 357.909 451.527 373.034 435.469C388.221 419.437 387.565 394.125 371.503 378.937L219.501 234.953Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M67.501 245.001L192 127.079L316.5 245.001C332.5 260.214 357.908 259.527 373.033 243.47C388.221 227.439 387.564 202.129 371.502 186.942L219.5 42.968C211.782 35.656 201.907 32 192 32C182.094 32 172.219 35.656 164.5 42.968L12.499 186.942C-3.564 202.129 -4.22 227.439 10.967 243.47C26.186 259.558 51.532 260.246 67.501 245.001Z" })
    ]
  }
));
AnglesUpDuotone.displayName = "AnglesUpDuotone";
var AnglesUp_default = AnglesUpDuotone;
