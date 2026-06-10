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
var AnglesRight_exports = {};
__export(AnglesRight_exports, {
  default: () => AnglesRight_default
});
module.exports = __toCommonJS(AnglesRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.015 256C256.015 246.094 252.359 236.219 245.049 228.5L101.06 76.499C85.873 60.436 60.562 59.78 44.533 74.967C28.441 90.186 27.753 115.53 43.002 131.499L160.929 256L43.002 380.501C27.785 396.501 28.472 421.908 44.533 437.033C60.562 452.22 85.873 451.564 101.06 435.501L245.049 283.5C252.359 275.781 256.015 265.906 256.015 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M437.047 228.5L293.06 76.499C277.873 60.436 252.562 59.78 236.533 74.967C220.441 90.186 219.753 115.53 235.002 131.499L352.929 256L235.002 380.501C219.785 396.501 220.472 421.908 236.533 437.033C252.562 452.22 277.873 451.564 293.06 435.501L437.047 283.5C444.359 275.781 448.015 265.906 448.015 256C448.015 246.094 444.359 236.219 437.047 228.5Z" })
    ]
  }
));
AnglesRightDuotone.displayName = "AnglesRightDuotone";
var AnglesRight_default = AnglesRightDuotone;
