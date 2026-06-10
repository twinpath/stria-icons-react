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
var AnglesDown_exports = {};
__export(AnglesDown_exports, {
  default: () => AnglesDown_default
});
module.exports = __toCommonJS(AnglesDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M164.501 277.047C172.219 284.359 182.094 288.016 192.001 288.016S211.782 284.359 219.501 277.047L371.503 133.059C387.565 117.875 388.221 92.563 373.034 76.531C357.815 60.438 332.469 59.75 316.501 75L192.001 192.93L67.501 75C51.501 59.781 26.092 60.469 10.967 76.531C-4.22 92.562 -3.564 117.875 12.499 133.059L164.501 277.047Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.501 266.984L192.001 384.914L67.501 266.984C51.501 251.766 26.092 252.453 10.967 268.516C-4.22 284.547 -3.564 309.859 12.499 325.043L164.501 469.031C172.219 476.344 182.094 480 192.001 480S211.782 476.344 219.501 469.031L371.503 325.043C387.565 309.859 388.221 284.547 373.034 268.516C357.815 252.422 332.469 251.734 316.501 266.984Z" })
    ]
  }
));
AnglesDownDuotone.displayName = "AnglesDownDuotone";
var AnglesDown_default = AnglesDownDuotone;
