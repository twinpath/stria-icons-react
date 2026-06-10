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
var PersonSledding_exports = {};
__export(PersonSledding_exports, {
  default: () => PersonSledding_default
});
module.exports = __toCommonJS(PersonSledding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSleddingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.061 420.108C495.684 410.731 480.431 410.856 471.179 420.108C459.052 432.237 440.423 435.363 426.045 428.861L375.035 402.353C380.411 397.977 384.161 391.6 384.161 384.098V304.076C384.161 281.945 366.283 264.065 344.153 264.065H272.639L340.277 196.296C351.78 184.793 355.28 167.788 349.029 152.784C342.778 137.78 328.275 128.027 312.022 128.027H151.989C138.736 128.027 127.984 138.78 127.984 152.033S138.736 176.04 151.989 176.04H259.011L158.99 261.814C152.739 267.191 149.738 275.318 150.739 283.32C150.989 284.821 151.989 285.946 152.489 287.321L34.965 226.804C23.088 220.678 8.71 225.304 2.708 237.057C-3.418 248.811 1.208 263.315 12.961 269.316L404.916 471.873C416.793 477.374 429.421 480 442.048 480C465.303 480 488.183 470.997 505.061 453.993C514.313 444.74 514.313 429.486 505.061 420.108ZM336.027 382.348L200.124 312.078H336.027V382.348ZM400.04 128.027C426.545 128.027 448.049 106.521 448.049 80.013S426.545 32 400.04 32C373.534 32 352.03 53.506 352.03 80.013S373.534 128.027 400.04 128.027Z" })
  }
));
PersonSleddingRegular.displayName = "PersonSleddingRegular";
var PersonSledding_default = PersonSleddingRegular;
