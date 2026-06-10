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
var S_exports = {};
__export(S_exports, {
  default: () => S_default
});
module.exports = __toCommonJS(S_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.456 480C117.13 480 58.351 458.463 29.251 446.054C4.896 435.614 -6.407 407.42 3.991 383.039C14.388 358.595 42.568 347.28 66.938 357.72C126.154 383.039 185.057 391.072 210.145 377.287C215.578 374.286 220.917 369.66 223.134 356.063C226.709 334.276 223.977 325.524 146.137 302.018C85.422 283.67 -16.211 252.975 2.196 140.51C8.003 105.095 27.643 75.025 57.54 55.895C102.626 27.013 168.29 24.325 252.75 47.768C278.275 54.864 293.231 81.308 286.144 106.876C279.071 132.414 252.563 147.324 227.115 140.291C149.493 118.754 118.8 130.664 109.215 136.79C106.67 138.416 98.926 143.386 96.866 156.045C93.291 177.832 96.023 186.584 173.863 210.09C234.578 228.438 336.211 259.133 317.804 371.598C311.201 411.858 289.953 442.96 256.325 461.433C231.752 474.967 203.651 480 175.456 480Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
SDuotone.displayName = "SDuotone";
var S_default = SDuotone;
