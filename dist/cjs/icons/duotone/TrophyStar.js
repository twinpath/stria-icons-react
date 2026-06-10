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
var TrophyStar_exports = {};
__export(TrophyStar_exports, {
  default: () => TrophyStar_default
});
module.exports = __toCommonJS(TrophyStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrophyStarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M193.654 316.859C189.816 311.09 186.195 305.273 182.793 299.363C135.656 280.016 100.231 253.529 77.412 219.844C49.475 178.625 47.006 135.656 48.381 112H128.701C128.031 101.926 128.012 96 128.012 96V64H27.256C16.162 64 6.537 71.594 3.912 82.375C3.1 85.781 -15.713 167.188 37.068 245.906C74.514 301.727 137.629 340.934 224.59 363.273C233.418 365.541 242.356 373.014 240.107 371.023C211.857 346.004 194.189 317.395 193.654 316.859ZM572.088 82.375C569.463 71.594 559.838 64 548.744 64H447.988V96C447.988 96 447.969 101.926 447.299 112H527.619C528.994 135.656 526.525 178.625 498.588 219.844C475.77 253.529 440.344 280.016 393.207 299.363C389.805 305.273 386.184 311.09 382.346 316.859C381.811 317.395 364.143 346.004 335.893 371.023C333.645 373.014 342.582 365.541 351.41 363.273C438.371 340.934 501.486 301.727 538.932 245.906C591.713 167.188 572.9 85.781 572.088 82.375ZM342.248 231.562L333.668 181.578L370.004 146.277C373.805 142.586 371.719 136.133 366.475 135.367L316.391 128.051L293.959 82.617C291.615 77.867 284.842 77.867 282.496 82.617L260.064 128.051L209.809 135.395C204.564 136.16 202.479 142.609 206.279 146.305L242.588 181.578L234.01 231.562C233.113 236.789 238.592 240.77 243.281 238.305L288.129 214.734L332.975 238.305C337.664 240.77 343.143 236.789 342.248 231.562Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96V32C448 14.326 433.674 0 416 0H160C142.326 0 128 14.326 128 32V96C128 96 128 271.746 240.096 371.023C249.811 379.627 256 391.514 256 404.49C256 428.52 236.52 448 212.49 448H208C181.49 448 160 469.49 160 496C160 504.836 167.164 512 176 512H400C408.836 512 416 504.836 416 496C416 469.49 394.51 448 368 448H363.51C339.48 448 320 428.52 320 404.49C320 391.514 326.189 379.627 335.904 371.023C448 271.746 448 96 448 96ZM288.129 214.734L243.281 238.305C238.592 240.77 233.113 236.789 234.01 231.562L242.588 181.578L206.279 146.305C202.479 142.609 204.564 136.16 209.809 135.395L260.064 128.051L282.496 82.617C284.842 77.867 291.615 77.867 293.959 82.617L316.391 128.051L366.475 135.367C371.719 136.133 373.805 142.586 370.004 146.277L333.668 181.578L342.248 231.562C343.143 236.789 337.664 240.77 332.975 238.305L288.129 214.734Z" })
    ]
  }
));
TrophyStarDuotone.displayName = "TrophyStarDuotone";
var TrophyStar_default = TrophyStarDuotone;
