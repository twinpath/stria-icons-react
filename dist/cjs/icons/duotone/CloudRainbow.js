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
var CloudRainbow_exports = {};
__export(CloudRainbow_exports, {
  default: () => CloudRainbow_default
});
module.exports = __toCommonJS(CloudRainbow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudRainbowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.125 304.875C441.125 310.5 450.125 317.25 458.125 325.25C487.5 292.75 529.375 272 576.375 272V208C515.375 208 460.125 232.625 419.625 272.25C425.25 282.25 429.375 293.25 431.125 304.875ZM239 173.625C260 179.5 279.375 190.125 295.625 204.625C360 119.375 461.625 64 576.375 64V0C437.5 0 314.625 68.75 239 173.625ZM326.125 225.125C333.625 224.25 362.875 219.75 394.625 244C441 197.25 505.25 168 576.375 168V104C475.125 104 384.75 151.375 326.125 225.125Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 416C464 469 421 512 368 512H96C43 512 0 469 0 416C0 365.375 39.25 324.375 88.875 320.75C88.75 317.75 88 315 88 312C88 250.125 138.125 200 200 200C245.375 200 284.25 227.125 301.875 266C311.75 259.75 323.375 256 336 256C371.25 256 400 284.75 400 320C400 321.875 399.375 323.75 399.25 325.625C436.75 338.625 464 374 464 416Z" })
    ]
  }
));
CloudRainbowDuotone.displayName = "CloudRainbowDuotone";
var CloudRainbow_default = CloudRainbowDuotone;
