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
var MarsDouble_exports = {};
__export(MarsDouble_exports, {
  default: () => MarsDouble_default
});
module.exports = __toCommonJS(MarsDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsDoubleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 240C140.654 240 112 268.656 112 304S140.654 368 176 368C211.348 368 240 339.344 240 304S211.348 240 176 240ZM623.971 32H511.398C489.979 32 479.25 57.852 494.396 72.969L524.008 102.527L480 146.457V160.367C480 191.273 454.801 216.414 423.828 216.414C421.172 216.414 418.588 216.012 416 215.641V221.504C422.922 225.555 429.582 230.195 435.514 236.117C473.012 273.547 473.012 334.453 435.514 371.883C416.766 390.594 392.133 399.953 367.51 399.953C365.232 399.953 362.986 399.465 360.715 399.305C351.074 417.992 338.613 435.543 323.078 451.078C317.02 457.137 310.561 462.621 303.922 467.824C324.363 475.711 345.893 480 367.51 480C412.633 480 457.756 462.816 492.184 428.453C553.289 367.457 560.039 272.898 512.693 204.328L569.346 147.781L598.955 177.34C603.854 182.227 609.875 184.414 615.783 184.414C628.145 184.414 640 174.836 640 160.367V48C640 39.164 632.824 32 623.971 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.693 204.33L377.346 147.783L406.955 177.34C422.102 192.459 448 181.75 448 160.369V48C448 39.162 440.824 32 431.971 32H319.399C297.979 32 287.25 57.852 302.397 72.971L332.008 102.527L275.359 159.076C204.15 110.086 104.965 119.119 44.26 186.467C-16.598 253.978 -14.394 361.469 49.008 426.603C117.703 497.176 230.717 497.793 300.184 428.451C361.289 367.457 368.039 272.896 320.693 204.33ZM243.514 371.881C206.014 409.312 145.002 409.311 107.504 371.881S70.006 273.549 107.504 236.117C145.002 198.687 206.014 198.686 243.514 236.117C281.012 273.547 281.012 334.451 243.514 371.881Z" })
    ]
  }
));
MarsDoubleDuotone.displayName = "MarsDoubleDuotone";
var MarsDouble_default = MarsDoubleDuotone;
