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
var ScrewdriverWrench_exports = {};
__export(ScrewdriverWrench_exports, {
  default: () => ScrewdriverWrench_default
});
module.exports = __toCommonJS(ScrewdriverWrench_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrewdriverWrenchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.104 307.047L148.889 247.887L0 396.775C-26.367 423.143 -26.367 465.857 0 492.225C13.184 505.408 30.439 512 47.725 512S82.266 505.408 95.449 492.225L214.559 373.115C205.691 352.344 202.816 329.354 208.104 307.047ZM44.225 472C30.971 472 20.225 461.254 20.225 448C20.225 434.744 30.971 424 44.225 424S68.225 434.744 68.225 448C68.225 461.254 57.479 472 44.225 472ZM487.924 109.26C486.283 102.83 479.74 98.949 473.312 100.59C471.219 101.125 469.307 102.213 467.779 103.742L393.328 178.244L325.365 166.92L314.041 98.906L388.492 24.457C393.189 19.77 393.199 12.162 388.512 7.465C386.947 5.896 384.98 4.791 382.826 4.271C333.738 -7.951 281.834 6.463 246.078 42.248C206.391 81.936 195.467 139.467 211.986 189.627L207.885 193.729L278.84 264.674C307.344 250.529 341.695 256.121 364.244 278.572L371.744 286.07C401.385 281.352 428.777 267.4 449.969 246.137C485.787 210.348 500.197 158.385 487.924 109.26Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 278.626C360.842 255.467 326.424 251.036 298.604 264.706L192 158.001V96.001L64 0.001L0 64.001L96 192.001H158L264.705 298.604C251.035 326.424 255.467 360.842 278.625 384.001L395.625 501.126C410.25 515.626 433.875 515.626 448.375 501.126L501.125 448.376C515.625 433.876 515.625 410.251 501.125 395.626L384 278.626Z" })
    ]
  }
));
ScrewdriverWrenchDuotone.displayName = "ScrewdriverWrenchDuotone";
var ScrewdriverWrench_default = ScrewdriverWrenchDuotone;
