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
var Rocket_exports = {};
__export(Rocket_exports, {
  default: () => Rocket_default
});
module.exports = __toCommonJS(Rocket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RocketDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M51.997 154.5L2.5 253.25C1 256.625 0.125 260.25 0 264C0 277.25 10.749 288 23.999 288H109.316C155.954 208.557 181.467 163.514 196.847 136.545C198.368 133.732 199.618 130.779 201.194 128H94.87C78.496 128 59.247 139.875 51.997 154.5ZM375.521 314.857C348.596 330.252 303.554 355.816 223.988 402.625V488C223.988 501.25 234.737 512 247.987 512C251.736 511.875 255.361 511 258.736 509.5L357.481 460.125C372.105 452.75 383.979 433.625 383.979 417.25V310.537C381.227 312.104 378.306 313.346 375.521 314.857Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.214 19.465C504.007 13.889 498.072 7.979 492.492 6.793C460.558 0 435.415 0 410.397 0C332.963 0 278.802 31.078 237.051 77.309C208.513 108.906 224.153 93.305 95.465 311.652C88.053 324.229 90.002 340.338 100.324 350.66L161.36 411.699C171.687 422.027 187.811 423.973 200.389 416.545C418.763 287.574 402.962 303.326 434.575 274.729C480.786 232.93 512.016 178.736 512.016 101.75C512.141 76.588 512.141 51.43 505.214 19.465ZM384.023 168C362.022 168 344.025 150.125 344.025 128S362.022 88 384.023 88C406.147 88 424.021 105.875 424.021 128S406.147 168 384.023 168Z" })
    ]
  }
));
RocketDuotone.displayName = "RocketDuotone";
var Rocket_default = RocketDuotone;
