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
var Tooth_exports = {};
__export(Tooth_exports, {
  default: () => Tooth_default
});
module.exports = __toCommonJS(Tooth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToothRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M428.117 115.702C417.116 69.142 380.709 31.174 335.364 18.956C305.239 10.956 273.707 19.206 241.518 43.549C239.768 44.861 230.956 51.549 224.893 55.923L185.205 29.768C160.423 16.425 136.078 12.8 112.672 18.956C67.389 31.174 30.982 69.142 19.982 115.702C10.482 155.857 18.107 195.887 41.514 228.385C55.826 248.26 63.858 273.259 66.858 307.164C70.202 343.037 74.921 385.536 84.577 428.596L90.984 457.283C96.171 480.094 115.828 496 138.828 496C161.485 496 181.048 480.407 186.361 458.158L214.737 341.225C216.924 331.975 231.049 332.038 233.393 341.287L261.706 458.095C267.05 480.407 286.613 496 309.27 496C332.021 496 352.115 479.657 357.021 457.251L363.49 428.628C373.365 384.598 378.084 340.537 381.116 307.132C384.241 273.196 392.335 248.166 406.585 228.417C429.648 196.449 437.523 155.357 428.117 115.702ZM367.647 200.324C348.177 227.385 337.271 259.915 333.302 302.789C330.427 334.788 325.927 376.817 316.677 418.097L308.364 446.846L279.988 329.85C273.519 303.664 250.487 285.383 224.049 285.383C197.392 285.383 174.361 303.757 168.079 329.975L137.828 446.752L131.422 418.128C122.359 377.661 117.859 337.069 114.672 302.82C110.89 260.072 100.015 227.51 80.452 200.324C65.327 179.294 60.42 153.17 66.67 126.764C73.702 97.109 96.64 72.985 125.016 65.361C136.266 62.423 148.579 64.548 160.61 70.923L243.175 125.452C254.237 132.764 269.113 129.702 276.426 118.64S280.676 92.703 269.613 85.391L267.55 84.047C268.488 83.329 269.457 82.61 270.457 81.86C290.582 66.673 307.739 61.236 322.927 65.329C351.459 72.985 374.397 97.109 381.428 126.764C387.678 153.232 382.803 179.356 367.647 200.324Z" })
  }
));
ToothRegular.displayName = "ToothRegular";
var Tooth_default = ToothRegular;
