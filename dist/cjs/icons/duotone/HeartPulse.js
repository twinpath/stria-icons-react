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
var HeartPulse_exports = {};
__export(HeartPulse_exports, {
  default: () => HeartPulse_default
});
module.exports = __toCommonJS(HeartPulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartPulseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28.166 256C-15.126 197.549 -8.695 112.482 48.724 62.861C103.084 15.885 186.265 24.357 236.29 75.924L256.007 96.248L275.724 75.924C325.749 24.359 408.93 15.883 463.286 62.859C520.708 112.479 527.14 197.549 483.774 256H362.293L334.626 200.75C328.742 189 311.841 189 305.958 200.75L256.883 298.75L198.67 169.375C192.786 156.625 174.634 156.875 169.125 169.75L133.196 256H28.166ZM342.388 288L320.354 243.75L270.529 343.25C264.52 355.25 247.118 354.875 241.61 342.625L184.649 216.25L154.603 288H56.459L232.937 470.195C245.601 483.268 266.319 483.268 278.983 470.195L455.461 288H342.388Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.608 256C479.965 260.912 476.617 265.992 472.262 270.484L455.295 288H342.222L320.188 243.75L270.363 343.25C264.354 355.25 246.953 354.875 241.444 342.625L184.483 216.25L154.437 288H56.293L39.326 270.484C34.979 265.992 31.638 260.912 28 256H133.03L168.959 169.75C174.468 156.875 192.62 156.625 198.504 169.375L256.717 298.75L305.792 200.75C311.676 189 328.576 189 334.46 200.75L362.127 256H483.608Z" })
    ]
  }
));
HeartPulseDuotone.displayName = "HeartPulseDuotone";
var HeartPulse_default = HeartPulseDuotone;
