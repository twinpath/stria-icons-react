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
var Hippo_exports = {};
__export(Hippo_exports, {
  default: () => Hippo_default
});
module.exports = __toCommonJS(Hippo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HippoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M581.12 96.2C553.45 96.05 528.62 113.78 504.52 122.82C489.548 87.179 454.658 63.995 416 64C405.075 64.105 394.249 66.094 384 69.88V56C384 42.745 373.255 32 360 32H344C330.745 32 320 42.745 320 56V105C286 79.6 241.24 64 192 64C86 64 0 135.64 0 224V464C0 472.837 7.163 480 16 480H80C88.837 480 96 472.837 96 464V393.21C128.35 407.57 166.72 416 208 416S287.65 407.57 320 393.21V464C320 472.837 327.163 480 336 480H400C408.837 480 416 472.837 416 464V288H608C625.673 288 640 273.673 640 256V164C640 129.89 615.21 96.39 581.12 96.2ZM448 176C439.163 176 432 168.837 432 160S439.163 144 448 144S464 151.163 464 160S456.837 176 448 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 288V304C544 312.837 551.163 320 560 320H592C600.837 320 608 312.837 608 304V288H544ZM448 144C439.163 144 432 151.163 432 160S439.163 176 448 176S464 168.837 464 160S456.837 144 448 144Z" })
    ]
  }
));
HippoDuotone.displayName = "HippoDuotone";
var Hippo_default = HippoDuotone;
