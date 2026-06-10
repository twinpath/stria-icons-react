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
var ChartNetwork_exports = {};
__export(ChartNetwork_exports, {
  default: () => ChartNetwork_default
});
module.exports = __toCommonJS(ChartNetwork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartNetworkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M119.08 272C107.965 252.975 87.547 240 64 240C28.75 240 0 268.75 0 304S28.75 368 64 368C87.547 368 107.965 355.025 119.08 336H179.229C177.127 325.658 176 314.961 176 304S177.127 282.342 179.229 272H119.08ZM576 64C540.75 64 512 92.75 512 128S540.75 192 576 192S640 163.25 640 128S611.25 64 576 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 384C564.807 384 554.342 387.094 545.221 392.213L458.223 340.014C461.615 328.518 464 316.592 464 304C464 287.234 460.564 271.316 454.699 256.641L522.004 207.285C504.064 195.025 490.873 176.693 484.477 155.43L416.52 205.266C394.467 187.254 366.68 176 336 176C328.012 176 320.264 176.949 312.68 178.352L276.256 100.303C283.525 89.979 288 77.537 288 64C288 28.75 259.25 0 224 0S160 28.75 160 64C160 97.293 185.734 124.467 218.281 127.42L254.852 205.783C226.471 229.266 208 264.307 208 304C208 374.666 265.334 432 336 432C370.967 432 402.605 417.893 425.713 395.148L512.104 446.982C512.094 447.324 512 447.66 512 448C512 483.25 540.75 512 576 512S640 483.25 640 448S611.25 384 576 384ZM336 352C309.5 352 288 330.5 288 304S309.5 256 336 256S384 277.5 384 304S362.5 352 336 352Z" })
    ]
  }
));
ChartNetworkDuotone.displayName = "ChartNetworkDuotone";
var ChartNetwork_default = ChartNetworkDuotone;
