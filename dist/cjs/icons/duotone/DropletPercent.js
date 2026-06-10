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
var DropletPercent_exports = {};
__export(DropletPercent_exports, {
  default: () => DropletPercent_default
});
module.exports = __toCommonJS(DropletPercent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletPercentDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.562 51.36C179.375 26.095 141.562 25.001 133.438 51.36C90.938 189.282 0 226.906 0 324.14C0 410.218 71.562 479.999 160 479.999S320 410.218 320 324.14C320 226.36 229.273 190.047 186.562 51.36ZM80 264C80 250.688 90.688 240 104 240S128 250.688 128 264S117.312 288 104 288S80 277.312 80 264ZM123.312 379.312C120.188 382.437 116.094 383.999 112 383.999S103.812 382.437 100.688 379.312C94.438 373.062 94.438 362.937 100.688 356.687L196.688 260.687C202.938 254.438 213.063 254.438 219.312 260.687S225.562 277.062 219.312 283.312L123.312 379.312ZM216 399.999C202.688 399.999 192 389.312 192 375.999S202.688 352 216 352S240 362.687 240 375.999S229.312 399.999 216 399.999Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 264C80 250.688 90.688 240 104 240S128 250.688 128 264S117.312 288 104 288S80 277.312 80 264ZM123.312 379.312C120.188 382.437 116.094 383.999 112 383.999S103.812 382.437 100.688 379.312C94.438 373.062 94.438 362.937 100.688 356.687L196.688 260.687C202.938 254.438 213.063 254.438 219.312 260.687S225.562 277.062 219.312 283.312L123.312 379.312ZM216 399.999C202.688 399.999 192 389.312 192 375.999S202.688 352 216 352S240 362.687 240 375.999S229.312 399.999 216 399.999Z" })
    ]
  }
));
DropletPercentDuotone.displayName = "DropletPercentDuotone";
var DropletPercent_default = DropletPercentDuotone;
