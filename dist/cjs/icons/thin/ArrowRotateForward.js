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
var ArrowRotateForward_exports = {};
__export(ArrowRotateForward_exports, {
  default: () => ArrowRotateForward_default
});
module.exports = __toCommonJS(ArrowRotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRotateForwardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 256C24 383.938 128.078 488 256 488C303.719 488 349.578 473.625 388.594 446.406C392.219 443.875 393.109 438.906 390.578 435.281C388.031 431.594 383 430.781 379.438 433.281C343.125 458.625 300.438 472 256 472C136.891 472 40 375.094 40 256S136.891 40 256 40C348.551 40 431.428 100.586 460.545 187.867L350.25 165.812C346.156 165 341.719 167.75 340.844 172.094C339.984 176.406 342.781 180.625 347.125 181.5L472.641 206.594C473.156 206.688 473.688 206.75 474.219 206.75C477.953 206.75 481.281 204.125 482.047 200.312L507.156 74.812C508.031 70.5 505.219 66.281 500.875 65.406C496.719 64.625 492.344 67.344 491.469 71.688L471.422 171.859C437.004 84.141 351.432 24 256 24C128.078 24 24 128.062 24 256Z" })
  }
));
ArrowRotateForwardThin.displayName = "ArrowRotateForwardThin";
var ArrowRotateForward_default = ArrowRotateForwardThin;
